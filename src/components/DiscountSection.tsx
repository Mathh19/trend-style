'use client';

import { Metal_Mania } from 'next/font/google';
import { useEffect, useState } from 'react';

import { ProductProps } from '@shared-types/product';

import { ProductCard } from './ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './UI/Carousel';
import { Skeleton } from './UI/Skeleton';
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
  const [discount, setDiscount] = useState({
    min: 0,
    max: 0
  });

  useEffect(() => {
    const discountedProducts = products.map((product) => product.discount);
    setDiscount({
      max: Math.max(...(discountedProducts as number[])),
      min: Math.min(...(discountedProducts as number[]))
    });
  }, [products]);

  return (
    <section id="Promotions" className="bg-black py-16 px-4 space-y-10">
      <h2 className={`${metalFont.className} text-white text-center text-6xl`}>
        Promotions
      </h2>

      {products.length === 0 ? (
        <Skeleton className="max-w-[90px] m-auto h-5" />
      ) : (
        <p className="text-center text-lg text-white">
          Discounts {discount.min}%-{discount.max}%
        </p>
      )}

      {products.length === 0 ? (
        <SkeletonProducts />
      ) : (
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-5xl m-auto max-[702px]:max-w-[280px]"
        >
          <CarouselContent className="px-1 pl-0">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="ml-0 basis-[28%] max-[840px]:basis-1/3 max-[702px]:basis-[90%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 outline outline-1" />
          <CarouselNext className="right-2 outline outline-1" />
        </Carousel>
      )}
    </section>
  );
};
