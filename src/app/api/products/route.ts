import { NextRequest, NextResponse } from 'next/server';

type ProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const data: ProductProps[] = [
  {
    id: 1,
    title: 'sepatu',
    price: 200000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
  },
  {
    id: 2,
    title: 'baju',
    price: 300000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
  },
  {
    id: 3,
    title: 'baju',
    price: 300000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
  },
  {
    id: 4,
    title: 'baju',
    price: 300000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
  },
  {
    id: 5,
    title: 'baju',
    price: 300000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png',
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
      products: product || {},
    });
  }
  return NextResponse.json({ status: 200, message: 'success', products: data });
}
