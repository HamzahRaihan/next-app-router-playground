import React from 'react';
import SkeletonCard from '../components/card';

export default function Loading() {
  const skeletonCount = 8; // Number of SkeletonCard components to render
  const skeletonCards = Array.from({ length: skeletonCount }, (_, index) => <SkeletonCard key={index} />);

  return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 place-items-center m-2">{skeletonCards}</div>;
}
