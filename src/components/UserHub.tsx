'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { CustomBadge } from './CustomBadge';

export const UserHub = () => {
  const { products } = useContext(WishlistContext);

  return (
    <>
      <Link title="profile" href="/">
        <FiUser size={22} />
      </Link>
      <Link title="my wishlist" href="/wishlist">
        <CustomBadge badgeContent={products.length}>
          <FiHeart size={22} />
        </CustomBadge>
      </Link>
      <Link title="shopping cart" href="/">
        <FiShoppingCart size={22} />
      </Link>
    </>
  );
};
