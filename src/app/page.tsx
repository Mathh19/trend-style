import { About } from '@components/About';
// import { Carousel } from '@components/Carousel';
import { CarouselImage } from '@components/CarouselImage';
import { ContainerProducts } from '@components/ContainerProducts';

import discountProducts from '../contents/discount-products.json';
import newProducts from '../contents/new-products.json';
import shoes from '../contents/shoes.json';

export default function Home() {
  return (
    <>
      <div>
        <CarouselImage />
      </div>

      <div id="Products">
        <ContainerProducts title="New Arrivals" products={newProducts} />
        <ContainerProducts title="Main discounts" products={discountProducts} />
        <ContainerProducts title="Shoes" products={shoes} />
      </div>
      <About />
    </>
  );
}
