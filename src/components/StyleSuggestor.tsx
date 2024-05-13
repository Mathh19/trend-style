'use client';

import { useProduct } from '@hooks/useProduct';
import { useProducts } from '@hooks/useProducts';

import { ProductsSlider } from './ProductsSlider';
import { SkeletonProducts } from './UI/SkeletonProducts';

type StyleSuggestorProps = {
  id: string;
};

export const StyleSuggestor = ({ id }: StyleSuggestorProps) => {
  const { product } = useProduct(id);
  const { products } = useProducts();

  const filteredProducts = products.filter(
    (productFilter) => productFilter.category === product?.category
  );

  if (filteredProducts.length === 0) return <SkeletonProducts />;

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2.5">Suggestions</h2>
      <ProductsSlider products={filteredProducts} />
    </div>
  );
};
