'use client';

import { useContext, useRef, useState } from 'react';
import { HiOutlineInbox } from 'react-icons/hi2';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { ContainerProducts } from '@components/ContainerProducts';
import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

export default function Wishlist() {
  const { products, clearWishList } = useContext(WishlistContext);
  const [limitProduct, setLimitProduct] = useState(6);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const maxProducts = products.slice(0, limitProduct);

  const handleIncreaseLimit = () => {
    setLimitProduct((prevLimitProduct) => prevLimitProduct + 3);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 180);
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-4 px-14">
      <h2 className="text-center uppercase font-bold text-3xl">My wishlist</h2>

      {products.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-2xl">You have no products in your wish list</p>
          <HiOutlineInbox size={140} className="mt-20" />
        </div>
      ) : (
        <>
          <div className="w-full flex max-w-[1096px] justify-end">
            <button
              onClick={clearWishList}
              className="bg-black text-white text-sm drop-shadow-md py-1.5 px-2 flex gap-1 items-center"
            >
              clear wishlist
              <IoIosCloseCircleOutline />
            </button>
          </div>

          <ContainerProducts products={maxProducts} />

          {products.length !== maxProducts.length && (
            <button
              ref={buttonRef}
              onClick={handleIncreaseLimit}
              className="bg-black text-white rounded-md py-1 px-1.5"
            >
              see more
            </button>
          )}
        </>
      )}
    </div>
  );
}
