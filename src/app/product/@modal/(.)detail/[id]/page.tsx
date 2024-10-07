import { ProductProps } from '@/app/types/product';

import { getData } from '@/services/products';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { Suspense } from 'react';

const Modal = dynamic(() => import('@/components/core/Modal/index'), { ssr: true });

export default async function DetailProduct({ params }: Readonly<{ params: { id: number } }>) {
  const { products }: { products: ProductProps } = await getData(`http://localhost:3000/api/products?id=${params.id}`);

  return (
    <Modal>
      <Suspense fallback="loading..">
        <Image className="object-cover" src={products.image} alt="product-image" width={300} height={300} loading="lazy" />
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl font-bold">{products.product_name}</h1>
          <h1 className="text-md">Price: ${products.price}</h1>
        </div>
      </Suspense>
    </Modal>
  );
}
