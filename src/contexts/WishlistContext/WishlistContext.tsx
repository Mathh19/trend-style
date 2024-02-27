'use client';

import { createContext, useState, useEffect } from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';

import { ProductProps } from '@shared-types/product';

import { WishlistContextProps } from './types';

export const WishlistContext = createContext({} as WishlistContextProps);

export const WishlistProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { storedValue, setValue } = useLocalStorage<ProductProps[]>(
    'wishlist',
    []
  );
  const [products, setProducts] = useState<ProductProps[]>(storedValue);

  const addProducts = (product: ProductProps) => {
    setProducts((products) => {
      const filterProducts = products.filter(
        (filterProduct) => filterProduct.id === product.id
      );
      if (filterProducts.length > 0) return products;
      return [...products, product];
    });
  };

  const removeProduct = (id: number) => {
    setProducts((products) => {
      return products.filter((product) => product.id !== id);
    });
  };

  const clearWishList = () => {
    setProducts([]);
  };

  useEffect(() => {
    setValue(products);
  }, [products, setValue]);

  return (
    <WishlistContext.Provider
      value={{ products, addProducts, removeProduct, clearWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
