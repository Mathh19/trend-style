'use client';

import { useContext, useEffect, useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';
import { VariantProps, tv } from 'tailwind-variants';

import { ProductProps } from '@shared-types/product';

import { Tooltip, TooltipContent, TooltipTrigger } from './UI/Tooltip';

const inputHeart = tv({
  base: 'relative text-2xl text-red-500 flex items-center justify-center w-8 h-8',
  variants: {
    background: {
      transparent: 'bg-transparent',
      white: 'bg-white border border-black rounded-full text-black'
    }
  },
  defaultVariants: {
    background: 'transparent'
  }
});

type AddWishlistProps = {
  product: ProductProps;
} & VariantProps<typeof inputHeart>;

export const AddWishlist = ({ product, background }: AddWishlistProps) => {
  const { products, addProducts, removeProduct } = useContext(WishlistContext);
  const [tooltipMessage, setTooltipMessage] = useState('add to wishlist');
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggle ? removeProduct(product.id) : addProducts(product);
  };

  useEffect(() => {
    const hasProduct = products.find(
      (prevProduct) => prevProduct.id === product.id
    );
    if (hasProduct) {
      setToggle(true);
      setTooltipMessage('remove from your wish list.');
    } else {
      setToggle(false);
      setTooltipMessage('add to your wish list.');
    }
  }, [product.id, products]);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={inputHeart({
            background,
            class: `${toggle && 'text-red-500'}`
          })}
        >
          <input
            aria-label={tooltipMessage}
            type="checkbox"
            id={`wishlist-${product.id}`}
            checked={toggle}
            onChange={handleToggle}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          {toggle ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </div>
      </TooltipTrigger>
      <TooltipContent>{tooltipMessage}</TooltipContent>
    </Tooltip>
  );
};
