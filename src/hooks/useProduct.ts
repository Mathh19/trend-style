import { useEffect, useState } from 'react';

import { ProductProps } from '@shared-types/product';

import products from '../contents/all-products.json';

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const getProduct = products.find((product) => product.id.toString() === id);
    setProduct(getProduct);
  }, [id]);

  return { product };
};
