'use client';

import { useProduct } from '@hooks/useProduct';

import { Gallery } from './Gallery';
import { LoadingProduct } from './LoadingProduct';
import { ProductDetails } from './ProductDetails';

type ProductsProps = {
  productId: string;
};

export const Product = ({ productId }: ProductsProps) => {
  const { product } = useProduct(productId);

  if (!product) return <LoadingProduct />;

  return (
    <div>
      <section>
        <div className="flex items-start justify-center gap-5 max-[762px]:flex-wrap">
          <Gallery images={product.img} description={product.name} />
          <ProductDetails product={product} />
        </div>
      </section>
    </div>
  );
};
