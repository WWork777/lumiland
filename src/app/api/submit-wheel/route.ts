import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { phone, prize } = await request.json();
    console.log('📥 Заявка получена:', { phone, prize });

    if (!phone || !prize) {
      return NextResponse.json({ error: 'Не все поля заполнены' }, { status: 400 });
    }

    // ---------- TELEGRAM: отправка группе и двум пользователям ----------
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    
    // Собираем ID из отдельных переменных (только если они заданы)
    const chatIds = [
      process.env.TELEGRAM_CHAT_ID_GROUP,
      process.env.TELEGRAM_CHAT_ID_USER1,
      process.env.TELEGRAM_CHAT_ID_USER2,
    ].filter(Boolean) as string[];

    let tgSuccessCount = 0;
    const tgErrors: string[] = [];

    if (TELEGRAM_BOT_TOKEN && chatIds.length > 0) {
      const tgMessage = `🎁 Новая заявка с Колеса фортуны!\n📞 Телефон: ${phone}\n🏆 Выигрыш: ${prize}\n⏰ Время: ${new Date().toLocaleString()}`;

      for (const chatId of chatIds) {
        try {
          const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: tgMessage }),
          });
          const data = await tgRes.json();
          if (tgRes.ok) {
            tgSuccessCount++;
            console.log(`✅ Telegram отправлено в ${chatId}`);
          } else {
            console.error(`❌ Ошибка Telegram для ${chatId}:`, data);
            tgErrors.push(`${chatId}: ${data.description}`);
          }
        } catch (e: any) {
          console.error(`❌ Исключение для ${chatId}:`, e);
          tgErrors.push(`${chatId}: ${e.message}`);
        }
      }
    } else {
      console.warn('⚠️ Telegram не настроен: отсутствует токен или все ID пусты');
    }

    // ---------- EMAIL (опционально) ----------
    let emailOk = false;
    const emailErrors: string[] = [];
    const EMAIL_TO = process.env.EMAIL_TO;

    if (EMAIL_TO && process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
          to: EMAIL_TO,
          subject: 'Новый выигрыш в Колесе фортуны',
          html: `
            <h2>Заявка с Колеса фортуны</h2>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Приз:</strong> ${prize}</p>
            <p><strong>Время:</strong> ${new Date().toLocaleString()}</p>
          `,
        });
        emailOk = true;
        console.log('✅ Email отправлен');
      } catch (e: any) {
        console.error('❌ Ошибка email:', e);
        emailErrors.push(e.message);
      }
    } else {
      console.warn('⚠️ Email не настроен (пропущены переменные)');
    }

    // ---------- Результат ----------
    if (tgSuccessCount === 0 && !emailOk) {
      return NextResponse.json(
        { success: false, error: 'Не удалось отправить заявку', details: { tgErrors, emailErrors } },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, tgSentTo: tgSuccessCount, emailOk });
  } catch (error: any) {
    console.error('❌ Критическая ошибка API:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера', details: error.message }, { status: 500 });
  }
}