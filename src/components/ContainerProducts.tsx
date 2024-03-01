import { ProductProps } from '@shared-types/product';

import { ProductCard } from './ProductCard';

type ContainerProductsProps = {
  title?: string;
  products: ProductProps[];
};

export const ContainerProducts = ({
  title,
  products
}: ContainerProductsProps) => {
  return (
    <div className="text-center space-y-7 py-11">
      {title && <h2 className="text-4xl">{title}</h2>}
      <div className="flex justify-around w-full flex-wrap gap-16">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
