import { NextResponse } from 'next/server';
import { setLastSpinTime } from '@/lib/wheelStore';

function getIpFromRequest(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return '127.0.0.1';
}

export async function POST(request) {
  const ip = getIpFromRequest(request);
  await setLastSpinTime(ip, Date.now());
  return NextResponse.json({ success: true });
}