import { NextRequest, NextResponse } from 'next/server';

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

const data: ProductProps[] = [
  {
    id: 1,
    name: 'sepatu',
    price: 200000,
  },
  {
    id: 2,
    name: 'baju',
    price: 300000,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log('🚀 ~ GET ~ searchParams:', searchParams);
  const id: string | null = searchParams.get('id');
  if (id) {
    const product = data.find((product) => product.id === Number(id));
    return NextResponse.json({
      status: product ? 201 : 404,
      message: product ? 'success' : 'not found',
      product: product || {},
    });
  }
  return NextResponse.json({ status: 200, message: 'success', product: data });
}
