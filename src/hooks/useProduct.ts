import { useEffect, useState } from 'react';

import { ProductProps } from '@shared-types/product';

import { useProducts } from './useProducts';

export const useProduct = (id: string) => {
  const { products } = useProducts();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const getProduct = products.find((product) => product.id.toString() === id);
    setProduct(getProduct);
  }, [id, products]);

  return { product };
};
