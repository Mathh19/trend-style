'use client';

import { About } from '@components/About';
import { CarouselImage } from '@components/CarouselImage';
import { ContainerProducts } from '@components/ContainerProducts';
import { DiscountSection } from '@components/DiscountSection';
import { useProducts } from '@hooks/useProducts';

export default function Home() {
  const { products, discountedProducts, filteredByCategory } = useProducts();

  return (
    <>
      <div>
        <CarouselImage />
      </div>

      <div id="Products">
        <ContainerProducts
          title="New Arrivals"
          products={products.slice(0, 3)}
        />

        <DiscountSection products={discountedProducts} />

        <ContainerProducts
          title="Shirts"
          products={filteredByCategory('shirt')}
        />
        <ContainerProducts
          title="Shoes"
          products={filteredByCategory('shoes')}
        />
      </div>
      <About />
    </>
  );
}
