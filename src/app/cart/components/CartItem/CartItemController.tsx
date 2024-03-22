'use client';

import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa6';

import { Price } from '@components/UI/Price';
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
      <div className="flex flex-wrap mt-1 gap-2">
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
      <div className="absolute bottom-0 mb-1">
        <Price price={product.price} discount={product.discount} />
      </div>
      <div className="flex gap-2 absolute bottom-0 right-0 mb-1 mr-2">
        <InputQuantity product={product} />{' '}
        <button onClick={() => deleteItem(product.cartId)}>
          <FaTrash />
        </button>
      </div>
    </>
  );
};
