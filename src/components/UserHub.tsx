'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';
import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { Badge } from './UI/Badge';

export const UserHub = () => {
  const { products } = useContext(WishlistContext);
  const { totalItems } = useContext(ShoppingCartContext);
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
        <Badge value={countWishlist}>
          <FiHeart size={22} />
        </Badge>
      </Link>
      <Link title="shopping cart" href="/cart" className="flex">
        <Badge value={totalItems}>
          <FiShoppingCart size={22} />
        </Badge>
      </Link>
    </>
  );
};
