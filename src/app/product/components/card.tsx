import { ProductProps } from '@/app/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({ product }: Readonly<{ product: ProductProps }>) {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image className="p-8 rounded-t-lg object-cover h-96" src={product.image} alt="product image" width={500} height={500} />
      </Link>

      <div className="px-5 pb-5 mt-auto">
        <Link href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <Link
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
