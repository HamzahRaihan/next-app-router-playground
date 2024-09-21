import React from 'react';

type Params = {
  params: { slug: string[] };
};

export default function DetailProductPage({ params }: Readonly<Params>) {
  const { slug } = params;
  return (
    <div>
      <h1>{slug ? 'Detail Product Page' : 'Product Page'}</h1>
      {slug && (
        <>
          {slug?.[0] && <div>Category: {slug[0]}</div>}
          {slug?.[1] && <div>Gender: {slug[1]}</div>}
          {slug?.[2] && <div>id: {slug[2]}</div>}
        </>
      )}
    </div>
  );
}
