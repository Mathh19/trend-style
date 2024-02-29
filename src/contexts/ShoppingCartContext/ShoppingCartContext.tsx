'use client';

import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';

import { cartItemsProps } from '@shared-types/cart-items';

import { isSameProduct } from './utils/isSameProduct';

import { ShoppingCartContextProps } from './types';

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

export const ShoppingCartProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { storedValue: productStored, setValue: setProductStored } =
    useLocalStorage<cartItemsProps[]>('cartItems', []);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItems = (item: cartItemsProps) => {
    const hasProductIndex = cartItems.findIndex((product) =>
      isSameProduct(product, item)
    );
    if (hasProductIndex !== -1) {
      const updatedProducts = [...cartItems];
      updatedProducts[hasProductIndex].quantity += item.quantity;
      setProductStored(updatedProducts);
      return;
    }
    setProductStored([...cartItems, { ...item }]);
  };

  const clearCart = () => {
    setProductStored([]);
  };

  useEffect(() => {
    setCartItems(productStored);
    const totalQuantity = productStored.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
    setTotalItems(totalQuantity);
  }, [productStored]);

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, totalItems, addItems, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
