import { NextResponse } from 'next/server';

import { attempts, LIMIT_TIME } from '../../../lib/wheelStore';

export async function GET(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');

    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    const lastAttempt = attempts.get(ip);

    const now = Date.now();

    // уже крутил
    if (lastAttempt && now - lastAttempt < LIMIT_TIME) {
      return NextResponse.json({
        canShow: false,
      });
    }

    return NextResponse.json({
      canShow: true,
    });
  } catch (error) {
    return NextResponse.json({
      canShow: true,
    });
  }
}
