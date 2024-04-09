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

  const [products, setProducts] = useState<ProductProps[]>([]);

  const addProducts = (product: ProductProps) => {
    setProducts((products) => {
      const filterProducts = products.filter(
        (filterProduct) => filterProduct.id === product.id
      );
      if (filterProducts.length > 0) return products;
      setValue([...products, product]);
      return [...products, product];
    });
  };

  const removeProduct = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);

    setValue(filteredProducts);
    setProducts(filteredProducts);
  };

  const clearWishList = () => {
    setValue([]);
    setProducts([]);
  };

  useEffect(() => {
    if (storedValue.length > 0) setProducts(storedValue);
  }, [storedValue]);

  return (
    <WishlistContext.Provider
      value={{ products, addProducts, removeProduct, clearWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
