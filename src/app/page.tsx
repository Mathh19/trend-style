import { About } from '@components/About';
import { Carousel } from '@components/Carousel';
import { ContainerProducts } from '@components/ContainerProducts';

import accessories from '../contents/accessories.json';
import discountProducts from '../contents/discount-products.json';
import newProducts from '../contents/new-products.json';
import shoes from '../contents/shoes.json';

export default function Home() {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section id="Products">
        <ContainerProducts title="New Arrivals" products={newProducts} />
        <ContainerProducts title="Main discounts" products={discountProducts} />
        <ContainerProducts title="Shoes" products={shoes} />
        <ContainerProducts title="Accessories" products={accessories} />
      </section>
      <About />
    </>
  );
}
