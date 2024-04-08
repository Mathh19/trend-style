'use client';

import products from '@contents/all-products.json';
import { useProduct } from '@hooks/useProduct';

import { ProductCard } from './ProductCard';
import { SkeletonProducts } from './UI/SkeletonProducts';

type StyleSuggestorProps = {
  id: string;
};

export const StyleSuggestor = ({ id }: StyleSuggestorProps) => {
  const { product } = useProduct(id);
  const filteredProducts = products.filter(
    (productFilter) => productFilter.category === product?.category
  );

  if (filteredProducts.length === 0) return <SkeletonProducts />;

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2.5">Suggestions</h2>
      <div className="flex gap-9 max-w-7xl overflow-x-auto">
        {filteredProducts.map((filteredProduct) => (
          <div key={filteredProduct.id} className="flex-shrink-0 mb-4">
            <ProductCard product={filteredProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};
