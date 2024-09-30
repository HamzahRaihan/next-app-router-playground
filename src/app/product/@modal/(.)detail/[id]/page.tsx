import { ProductProps } from '@/app/types/product';
import Modal from '@/components/core/Modal';
import { getData } from '@/services/products';
import Image from 'next/image';
import React from 'react';

export default async function DetailProduct({ params }: Readonly<{ params: { id: number } }>) {
  const { products }: { products: ProductProps } = await getData(`http://localhost:3000/api/products?id=${params.id}`);

  return (
    <Modal>
      <Image src={products.image} alt="product-image" width={500} height={500} priority />
      <div>
        <h1 className="text-xl font-bold">{products.title}</h1>
        <h1 className="text-md">Price: ${products.price}</h1>
      </div>
    </Modal>
  );
}
