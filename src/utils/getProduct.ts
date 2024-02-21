import { ProductProps } from '@shared-types/product';

export const getProduct = (products: ProductProps[], id: string) => {
  const product = products.find((product) => product.id.toString() === id);
  return product;
};
