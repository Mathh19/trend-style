import { Product, ProductProps } from './Product';

type ContainerProductsProps = {
  title: string;
  products: ProductProps[];
};

export const ContainerProducts = ({
  title,
  products
}: ContainerProductsProps) => {
  return (
    <div className="text-center space-y-7 py-11">
      <h2 className="text-4xl">{title}</h2>
      <div className="flex justify-around w-full flex-wrap gap-16">
        {products.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            rate={product.rate}
            img={product.img}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};
