'use client';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { calculateDiscount } from '@utils/calculate-discount';

export type ProductProps = {
  id: number;
  name: string;
  rate: number;
  price: number;
  discount?: number;
  img: string[];
};

export const Product = ({
  id,
  name,
  rate,
  price,
  discount,
  img
}: ProductProps) => {
  const { products, addProducts, removeProduct } = useContext(WishlistContext);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggle
      ? removeProduct(id)
      : addProducts({ id, img, name, price, rate, discount });
  };

  useEffect(() => {
    const hasProduct = products.find((product) => product.id === id);
    hasProduct ? setToggle(true) : setToggle(false);
  }, [id, products]);

  return (
    <div className="relative w-72 h-92 border drop-shadow-md">
      <div className="absolute flex w-full justify-between p-2">
        <div
          aria-label="add to your wish list"
          className="relative text-2xl text-red-500"
        >
          <input
            type="checkbox"
            id="wishlist"
            checked={toggle}
            onChange={handleToggle}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          {toggle ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </div>
        <button
          aria-label="add to shopping cart"
          className="bg-white p-1 rounded-md text-2xl"
        >
          <TbShoppingCartPlus />
        </button>
      </div>
      <img src={img[0]} alt={name} className="w-full h-full" />
      <Link href={`./product/${id}`} className="group">
        <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
          <div className="flex justify-between">
            <p className="text-left group-hover:underline">{name}</p>
            <div className="flex gap-2.5">
              <p className={`${discount && 'line-through'}`}>${price}</p>
              {discount && (
                <span className="text-red-700">
                  ${calculateDiscount(price, discount)}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, index) => {
              return <MdOutlineStar key={index} />;
            })}
            <span className="ml-1 text-xs text-zinc-600">({rate})</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
