import { ProductProps } from '@shared-types/product';

import { ProductCard } from './ProductCard';
import { SkeletonProducts } from './UI/SkeletonProducts';

type ContainerProductsProps = {
  title?: string;
  products: ProductProps[];
};

export const ContainerProducts = ({
  title,
  products
}: ContainerProductsProps) => {
  if (products.length === 0)
    return (
      <div className="py-11">
        <SkeletonProducts />;
      </div>
    );

  return (
    <div className="text-center space-y-7 py-11">
      {title && <h2 className="text-4xl font-semibold">{title}</h2>}

      <div className="flex justify-around w-full flex-wrap gap-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
