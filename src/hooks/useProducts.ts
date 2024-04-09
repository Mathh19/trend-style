import { useEffect, useState } from 'react';

import { products as productsData } from '@data/products';

import { ProductProps } from '@shared-types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const discountedProducts = products.filter((product) => product.discount);

  const filteredByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  useEffect(() => {
    if (productsData.length > 0) setProducts(productsData);
  }, []);

  return { products, discountedProducts, filteredByCategory };
};
