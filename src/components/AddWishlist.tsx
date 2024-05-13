'use client';

import { useContext, useEffect, useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { ProductProps } from '@shared-types/product';

type AddWishlistProps = {
  product: ProductProps;
};

export const AddWishlist = ({ product }: AddWishlistProps) => {
  const { products, addProducts, removeProduct } = useContext(WishlistContext);
  const [ariaLabel, setAriaLabel] = useState('add to wishlist');
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
      setAriaLabel('remove from your wish list.');
    } else {
      setToggle(false);
      setAriaLabel('add to your wish list.');
    }
  }, [product.id, products]);

  return (
    <label
      data-added={toggle}
      className='data-[added="true"]:text-red-500 flex justify-center items-center relative cursor-pointer w-9 h-9 border border-zinc-400 rounded-full transition-all duration-300'
    >
      <input
        aria-label={ariaLabel}
        type="checkbox"
        checked={toggle}
        onChange={handleToggle}
        autoComplete="off"
        className="appearance-none absolute inset-0 cursor-pointer"
      />
      {toggle ? (
        <IoMdHeart size={30} />
      ) : (
        <IoIosHeartEmpty size={30} className="fill-red-500" />
      )}
    </label>
  );
};
