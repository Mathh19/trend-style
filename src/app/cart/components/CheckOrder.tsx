'use client';

import { useContext } from 'react';

import { Button } from '@components/UI/Button';
import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';

import { calculateDiscount } from '@utils/calculate-discount';
import { formatCurrency } from '@utils/format-currency';

export const CheckOrder = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const total = cartItems
    .map((cartItem) => {
      const price = cartItem.discount
        ? calculateDiscount(cartItem.price, cartItem.discount)
        : cartItem.price;
      return price * cartItem.quantity;
    })
    .reduce((acc, currentValue) => acc + currentValue);

  return (
    <div>
      <div className="w-full space-y-4 p-4 mt-6 bg-white border border-black">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-bold text-3xl">Total:</h2>
          <span className="font-medium text-xl">{formatCurrency(total)}</span>
        </div>
        <Button text="buy now" className="w-full" />
      </div>
    </div>
  );
};
