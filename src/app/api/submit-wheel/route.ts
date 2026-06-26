// app/api/submit-wheel/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { attempts, LIMIT_TIME } from '../../../lib/wheelStore';

async function ensureCustomFields(amoFetch: any) {
  const fieldsToCreate = [
    { name: 'Приз с колеса фортуны', type: 'text' },
    { name: 'Дата рождения ребенка', type: 'text' },
  ];

  const existingFields = await amoFetch('/leads/custom_fields');
  const fieldIds: Record<string, number> = {};

  for (const field of fieldsToCreate) {
    const existing = existingFields._embedded?.custom_fields?.find(
      (f: any) => f.name === field.name
    );
    if (existing) {
      fieldIds[field.name] = existing.id;
    } else {
      const newField = await amoFetch('/leads/custom_fields', {
        method: 'POST',
        body: JSON.stringify([{ name: field.name, type: field.type }]),
      });
      fieldIds[field.name] = newField._embedded.custom_fields[0].id;
      console.log(
        `✅ Создано новое поле: ${field.name}, ID: ${fieldIds[field.name]}`
      );
    }
  }
  return fieldIds;
}
async function sendToAmoCRM(
  name: string,
  phone: string,
  prize: string,
  date: string
) {
  const subdomain = process.env.AMO_SUBDOMAIN;
  const accessToken = process.env.AMO_ACCESS_TOKEN;
  const pipelineId = parseInt(process.env.AMO_PIPELINE_ID || '0');
  const statusId = parseInt(process.env.AMO_STATUS_ID || '0');

  if (!subdomain || !accessToken) {
    console.warn('⚠️ Отсутствуют AMO_SUBDOMAIN или AMO_ACCESS_TOKEN');
    return false;
  }
  if (!pipelineId || !statusId) {
    console.warn(
      '⚠️ Не указаны ID воронки или статуса (AMO_PIPELINE_ID, AMO_STATUS_ID)'
    );
    return false;
  }

  const baseUrl = `https://${subdomain}.amocrm.ru/api/v4`;

  async function amoFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        ...options.headers,
      },
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`amoCRM API error ${response.status}: ${text}`);
    }
    return response.json();
  }

  try {
    // 1. Создаём новый контакт (всегда!)
    console.log(`➕ Создаём новый контакт: имя="${name}", телефон="${phone}"`);
    const createContactResult = await amoFetch('/contacts', {
      method: 'POST',
      body: JSON.stringify([
        {
          name: name,
          custom_fields_values: [
            {
              field_code: 'PHONE',
              values: [{ value: phone }],
            },
          ],
        },
      ]),
    });
    const contactId = createContactResult?._embedded?.contacts?.[0]?.id;
    if (!contactId) throw new Error('Не удалось создать контакт');
    console.log(`✅ Контакт создан, ID: ${contactId}`);

    // 2. Получаем ID пользовательских полей (приз, IP) – создаются автоматически при отсутствии
    const fieldIds = await ensureCustomFields(amoFetch);
    const prizeFieldId = fieldIds['Приз с колеса фортуны'];
    const dateFieldId = fieldIds['Дата рождения ребенка'];

    // 3. Создаём сделку в нужной воронке и статусе, привязываем контакт
    console.log(`➕ Создаём сделку для контакта ${contactId}...`);
    const leadResult = await amoFetch('/leads', {
      method: 'POST',
      body: JSON.stringify([
        {
          name: `КФ`,
          price: 0,
          pipeline_id: pipelineId,
          status_id: statusId,
          _embedded: { contacts: [{ id: contactId }] },
          custom_fields_values: [
            { field_id: prizeFieldId, values: [{ value: prize }] },
            { field_id: dateFieldId, values: [{ value: date }] },
          ],
        },
      ]),
    });

    if (leadResult?._embedded?.leads?.length > 0) {
      const leadId = leadResult._embedded.leads[0].id;
      console.log(`✅ Сделка создана, ID: ${leadId}`);

      // 4. Создаём задачу «Связаться» на сегодня
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 0);
      const completeTill = Math.floor(endOfDay.getTime() / 1000);

      try {
        await amoFetch('/tasks', {
          method: 'POST',
          body: JSON.stringify([{
            task_type_id: 1,
            text: 'Связаться с клиентом',
            complete_till: completeTill,
            entity_id: leadId,
            entity_type: 'leads'
          }])
        });
        console.log(`✅ Задача «Связаться» создана для сделки ${leadId}`);
      } catch (taskError) {
        console.error('⚠️ Не удалось создать задачу:', taskError);
      }

      return true;
    } else {
      throw new Error('Не удалось создать сделку');
    }
  } catch (error) {
    console.error('❌ Ошибка при отправке в amoCRM:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // ===============================
    // Получаем IP
    // ===============================
    const forwardedFor = request.headers.get('x-forwarded-for');

    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    console.log('🌐 IP:', ip);

    // ===============================
    // Проверка лимита
    // ===============================
    const now = Date.now();

    const lastAttempt = attempts.get(ip);

    if (lastAttempt && now - lastAttempt < LIMIT_TIME) {
      const remainingMs = LIMIT_TIME - (now - lastAttempt);

      const hours = Math.floor(remainingMs / (1000 * 60 * 60));

      const minutes = Math.floor(
        (remainingMs % (1000 * 60 * 60)) / (1000 * 60)
      );

      return NextResponse.json(
        {
          success: false,
          error: `Вы уже крутили колесо. Попробуйте снова через ${hours} ч. ${minutes} мин.`,
        },
        { status: 429 }
      );
    }

    // ===============================
    // Данные
    // ===============================
    const { date, name, phone, prize } = await request.json();

    if (!name || !phone || !prize || !date) {
      return NextResponse.json(
        {
          success: false,
          error: 'Не все поля заполнены',
        },
        { status: 400 }
      );
    }

    // сохраняем попытку
    attempts.set(ip, now);

    console.log('📥 Новая заявка:', {
      date,
      name,
      phone,
      prize,
      ip,
    });

    // ===============================
    // TELEGRAM
    // ===============================
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    const chatIds = [
      process.env.TELEGRAM_CHAT_ID_GROUP,
      process.env.TELEGRAM_CHAT_ID_USER1,
      process.env.TELEGRAM_CHAT_ID_USER2,
      process.env.TELEGRAM_CHAT_ID_USER3,
    ].filter(Boolean) as string[];

    let tgSuccessCount = 0;

    if (TELEGRAM_BOT_TOKEN && chatIds.length) {
      const tgMessage =
        `🎁 Новая заявка с Колеса фортуны!\n\n` +
        `👤 Имя: ${name}\n` +
        `🎂 Дата рождения: ${date}\n` +
        `📞 Телефон: ${phone}\n` +
        `🏆 Приз: ${prize}\n` +
        `🌐 IP: ${ip}`;

      for (const chatId of chatIds) {
        try {
          const tgRes = await fetch(
            `https://tg-proxy.parsikovevgenij470.workers.dev/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: tgMessage,
              }),
            }
          );

          if (tgRes.ok) {
            tgSuccessCount++;
          }
        } catch (e) {
          console.error('Ошибка Telegram:', e);
        }
      }
    }

    // ===============================
    // EMAIL
    // ===============================
    let emailOk = false;

    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"LumiLand" <${process.env.EMAIL_USER}>`,
          to: ['Arinakovaleva644@gmail.com', 'lumi.land@mail.ru'],
          subject: 'Новая заявка с колеса фортуны',

          html: `
            <h2>Новая заявка</h2>

            <p>
              <strong>Имя:</strong>
              ${name}
            </p>

            <p>
              <strong>Дата рождения ребенка:</strong>
              ${date}
            </p>

            <p>
              <strong>Телефон:</strong>
              ${phone}
            </p>

            <p>
              <strong>Приз:</strong>
              ${prize}
            </p>

            <p>
              <strong>IP:</strong>
              ${ip}
            </p>

            <p>
              <strong>Время:</strong>
              ${new Date().toLocaleString()}
            </p>
          `,
        });

        emailOk = true;
      } catch (e) {
        console.error('Ошибка email:', e);
      }
    }
    // ----- 5. Отправка в amoCRM -----
    let amoSent = false;
    try {
      console.log('📤 Отправка в amoCRM...');
      amoSent = await sendToAmoCRM(name, phone, prize, date);
      if (amoSent) console.log('✅ Успешно отправлено в amoCRM');
      else console.log('⚠️ Не удалось отправить в amoCRM');
    } catch (err) {
      console.error('❌ Критическая ошибка amoCRM:', err);
    }

    // ----- 6. Ответ клиенту (включаем все данные для отладки) -----
    return NextResponse.json({
      success: true,
      name,
      phone,
      prize,
      date,
      tgSentTo: tgSuccessCount,
      emailOk,
      amoSent,
    });
  } catch (error: any) {
    console.error('❌ Внутренняя ошибка сервера:', error);
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
