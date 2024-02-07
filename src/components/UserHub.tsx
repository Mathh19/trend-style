'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { CustomBadge } from './CustomBadge';

export const UserHub = () => {
  const { products } = useContext(WishlistContext);
  const [countWishlist, setCountWishlist] = useState(0);

  useEffect(() => {
    setCountWishlist(products.length);
  }, [products]);

  return (
    <>
      <Link title="profile" href="/" className="flex">
        <FiUser size={22} />
      </Link>
      <Link title="my wishlist" href="/wishlist" className="flex">
        <CustomBadge badgeContent={countWishlist}>
          <FiHeart size={22} />
        </CustomBadge>
      </Link>
      <Link title="shopping cart" href="/" className="flex">
        <FiShoppingCart size={22} />
      </Link>
    </>
  );
};
