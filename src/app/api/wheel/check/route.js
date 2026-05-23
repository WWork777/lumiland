import { NextResponse } from 'next/server';
import { getLastSpinTime } from '@/lib/wheelStore';

function getIpFromRequest(request) {
  // Для локальной разработки можно вернуть фиксированный тестовый IP
  // В продакшене используйте x-forwarded-for или x-real-ip
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  // fallback для локального тестирования
  return '127.0.0.1';
}

export async function GET(request) {
  const ip = getIpFromRequest(request);
  const lastSpin = await getLastSpinTime(ip);
  const now = Date.now();
  const allowed = !lastSpin || (now - lastSpin) >= 24 * 60 * 60 * 1000;
  return NextResponse.json({ allowed });
}