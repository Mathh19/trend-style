'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './UI/Carousel';

export const CarouselImage = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        })
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            src="./bg-carousel-1.png"
            className="w-full max-h-[450px] object-center object-cover"
            alt="Image informing new products with a 30 to 50 percent discount"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="./bg-carousel-2.png"
            className="w-full max-h-[450px] object-center object-cover"
            alt="Image informing new collections in store"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};
