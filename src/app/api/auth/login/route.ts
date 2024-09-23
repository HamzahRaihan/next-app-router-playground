import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log('🚀 ~ POST ~ res:', data);

  return NextResponse.json({ status: 200, message: 'success', data });
}
