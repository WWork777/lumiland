import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { attempts, LIMIT_TIME } from '../../../lib/wheelStore';

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
    const { phone, prize } = await request.json();

    if (!phone || !prize) {
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
    ].filter(Boolean) as string[];

    let tgSuccessCount = 0;

    if (TELEGRAM_BOT_TOKEN && chatIds.length) {
      const tgMessage =
        `🎁 Новая заявка с Колеса фортуны!\n\n` +
        `📞 Телефон: ${phone}\n` +
        `🏆 Приз: ${prize}\n` +
        `🌐 IP: ${ip}\n` +
        `⏰ Время: ${new Date().toLocaleString()}`;

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
      process.env.EMAIL_TO &&
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
          to: process.env.EMAIL_TO,
          subject: 'Новая заявка с колеса фортуны',
          html: `
            <h2>Новая заявка</h2>

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

    return NextResponse.json({
      success: true,
      tgSentTo: tgSuccessCount,
      emailOk,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: 'Внутренняя ошибка сервера',
      },
      { status: 500 }
    );
  }
}
