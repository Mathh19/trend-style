'use client';

import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';

import { About } from '@components/About';
import { CarouselImage } from '@components/CarouselImage';
import { ContainerProducts } from '@components/ContainerProducts';
import { DiscountSection } from '@components/DiscountSection';
import { InfoCard } from '@components/InfoCard';
import { SearchProducts } from '@components/SearchProducts';
import { useProducts } from '@hooks/useProducts';

export default function Home() {
  const { products, discountedProducts, filteredByCategory } = useProducts();

  return (
    <>
      <SearchProducts />

      <div>
        <CarouselImage />
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-10 px-4">
        <InfoCard
          icon={<FaTruckFast size={50} className="text-zinc-700" />}
          text="Free delivery"
        />
        <InfoCard
          icon={<MdOutlineSupportAgent size={50} className="text-zinc-700" />}
          text="Support 24 hours"
        />
        <InfoCard
          icon={<RiRefund2Fill size={50} className="text-zinc-700" />}
          text="Return & Refund"
        />
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
