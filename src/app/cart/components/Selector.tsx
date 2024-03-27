'use client';

import { useContext, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';

import { CartItemsProps } from '@shared-types/cart-items';
import { ColorProps } from '@shared-types/color';

type SelectorProps = {
  actualValue: ColorProps | string;
  product: CartItemsProps;
  colors?: ColorProps[];
  sizes?: string[];
};

export const Selector = ({
  actualValue,
  colors,
  sizes,
  product
}: SelectorProps) => {
  const { cartItems, deleteItem, updateItem } = useContext(ShoppingCartContext);
  const [open, setOpen] = useState(false);

  const handleUpdateProduct = (productUpdate: CartItemsProps) => {
    const hasSameProduct = cartItems.find(
      (cartItem) =>
        cartItem.cartId !== productUpdate.cartId &&
        cartItem.id === productUpdate.id &&
        cartItem.name === productUpdate.name &&
        cartItem.color.hex === productUpdate.color.hex &&
        cartItem.size === productUpdate.size
    );
    if (hasSameProduct) {
      updateItem({
        ...hasSameProduct,
        quantity: (hasSameProduct.quantity += productUpdate.quantity)
      });
      deleteItem(productUpdate.cartId);
      return;
    }
    updateItem(productUpdate);
    setOpen(false);
  };

  return (
    <div className="relative max-w-[90px]">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer bg-white w-full flex items-center justify-between gap-2 border border-black rounded-full px-1.5 py-1"
      >
        <div className="flex justify-center items-center gap-1">
          {typeof actualValue !== 'string' && (
            <div
              style={{ backgroundColor: actualValue.hex }}
              className="w-3.5 h-3.5 rounded-full border border-black"
            ></div>
          )}
          <span className="uppercase font-medium text-xs">
            {typeof actualValue !== 'string' ? actualValue.name : actualValue}
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`transition-all duration-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <IoIosArrowDown size={12} />
        </button>
      </div>
      {open && (
        <ul className="absolute z-50 w-full bg-white rounded-sm text-sm border mt-1.5 max-h-[62px] overflow-y-auto border-black drop-shadow divide-y divide-black">
          {colors &&
            colors.map((color) => (
              <li
                onClick={() => {
                  handleUpdateProduct({ ...product, color: color });
                }}
                className="p-1 cursor-default hover:bg-zinc-300"
                key={color.hex}
              >
                {color.name}
              </li>
            ))}
          {sizes &&
            sizes.map((size) => (
              <li
                onClick={() => handleUpdateProduct({ ...product, size: size })}
                className="p-1 cursor-default hover:bg-zinc-300"
                key={size}
              >
                {size}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
