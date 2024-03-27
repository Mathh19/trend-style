'use client';

import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa6';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';

import { CartItemsProps } from '@shared-types/cart-items';

import { InputQuantity } from '../InputQuantity';
import { Selector } from '../Selector';

type CartItemControllerProps = {
  product: CartItemsProps;
};

export const CartItemController = ({ product }: CartItemControllerProps) => {
  const { deleteItem } = useContext(ShoppingCartContext);

  const getNumberSize = (size: string) => {
    if (product.category === 'shoes') {
      const sizeNum = size.replace(/\D/g, '');
      return sizeNum;
    }
    return size;
  };

  return (
    <>
      <div className="flex flex-1 flex-wrap gap-2.5">
        <Selector
          product={product}
          actualValue={product.color}
          colors={product.colors}
        />
        <Selector
          product={product}
          actualValue={`Size / ${getNumberSize(product.size)}`}
          sizes={product.sizes}
        />
      </div>
      <div className="w-full flex flex-wrap items-center justify-between">
        <div className="flex justify-between w-full gap-4">
          <InputQuantity product={product} />{' '}
          <button onClick={() => deleteItem(product.cartId)}>
            <FaTrash size={20} />
          </button>
        </div>
      </div>
    </>
  );
};
