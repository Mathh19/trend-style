import { Metal_Mania } from 'next/font/google';

import { ProductProps } from '@shared-types/product';

import { ProductsSlider } from './ProductsSlider';
import { SkeletonProducts } from './UI/SkeletonProducts';

type DiscountSectionProps = {
  products: ProductProps[];
};

const metalFont = Metal_Mania({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export const DiscountSection = ({ products }: DiscountSectionProps) => {
  return (
    <section id="Promotions" className="bg-black py-16 px-4 space-y-10">
      <h2 className={`${metalFont.className} text-white text-center text-6xl`}>
        Main Discounts
      </h2>

      {products.length === 0 ? (
        <SkeletonProducts />
      ) : (
        <ProductsSlider products={products} />
      )}
    </section>
  );
};
