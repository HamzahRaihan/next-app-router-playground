import { register } from '@/app/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log('🚀 ~ POST ~ data:', data);
  const res = await register(data);
  return NextResponse.json({ status: res?.status, message: res?.message }, { status: res?.statusCode });
}

export async function GET() {
  return NextResponse.json({ status: 405, message: 'Method not allowed' }, { status: 405 });
}
