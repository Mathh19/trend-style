import { ProductProps } from '@shared-types/product';

import { ProductCard } from './ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './UI/Carousel';

type ProductsSliderProps = {
  products: ProductProps[];
};

export const ProductsSlider = ({ products }: ProductsSliderProps) => {
  return (
    <Carousel opts={{ loop: true, align: 'start' }}>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex justify-center items-center basis-1/3 max-md:basis-1/2 max-[484px]:basis-full"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 outline outline-1" />
      <CarouselNext className="right-2 outline outline-1" />
    </Carousel>
  );
};
