'use client';

import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';

import { CartItemsProps } from '@shared-types/cart-items';

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
    useLocalStorage<CartItemsProps[]>('cartItems', []);
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItems = (item: CartItemsProps) => {
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

  const updateItem = (item: CartItemsProps) => {
    const hasProductIndex = cartItems.findIndex(
      (product) => product.cartId === item.cartId
    );
    if (hasProductIndex !== -1) {
      const updatedProducts = [...cartItems];
      updatedProducts[hasProductIndex] = item;
      setProductStored(updatedProducts);
      return;
    }
    return;
  };

  const deleteItem = (itemId: string | number) => {
    const filteredItem = cartItems.filter(
      (cartItem) => cartItem.cartId !== itemId
    );
    setProductStored(filteredItem);
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
      value={{
        cartItems,
        totalItems,
        addItems,
        updateItem,
        deleteItem,
        clearCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
