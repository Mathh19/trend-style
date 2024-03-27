'use client';

import Link from 'next/link';
import { useContext } from 'react';

import { Price } from '@components/UI/Price';
import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';

import { CartItem } from '../CartItem';
import { CheckOrder } from '../CheckOrder';
import { CartContainer } from './CartContainer';
import { CartEmpty } from './CartEmpty';

export const Cart = () => {
  const { cartItems, clearCart } = useContext(ShoppingCartContext);

  if (cartItems.length <= 0) return <CartEmpty />;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div>
          <div className="w-full flex items-center justify-end">
            <button onClick={clearCart}>clear all</button>
          </div>
          <CartContainer>
            {cartItems.map((cartItem) => (
              <CartItem.Wrapper key={cartItem.cartId}>
                <CartItem.Image img={cartItem.img[0]} alt={cartItem.name} />
                <CartItem.Content>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <Link
                        href={`/product/${cartItem.id}`}
                        className="font-semibold hover:underline"
                      >
                        {cartItem.name}
                      </Link>
                      <Price
                        price={cartItem.price}
                        discount={cartItem.discount}
                      />
                    </div>
                    <CartItem.Controller product={cartItem} />
                  </div>
                </CartItem.Content>
              </CartItem.Wrapper>
            ))}
          </CartContainer>
        </div>
        <CheckOrder />
      </div>
    </div>
  );
};
