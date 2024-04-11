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
    <div className="max-w-4xl text-center m-auto space-y-5 px-4 py-10">
      {title && <h2 className="text-4xl font-semibold">{title}</h2>}

      <div className="flex w-full justify-center flex-wrap gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
