'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';
import { WishlistContext } from '@contexts/WishlistContext/WishlistContext';

import { DisplayItems } from './DisplayItems';
import { Badge } from './UI/Badge';
import { Tooltip, TooltipContent, TooltipTrigger } from './UI/Tooltip';

export const UserHub = () => {
  const { products } = useContext(WishlistContext);
  const { totalItems, cartItems } = useContext(ShoppingCartContext);
  const [countWishlist, setCountWishlist] = useState(0);

  useEffect(() => {
    setCountWishlist(products.length);
  }, [products]);

  return (
    <>
      <Tooltip>
        <Link href="/">
          <TooltipTrigger>
            <FiUser size={22} />
          </TooltipTrigger>
          <TooltipContent>My profile</TooltipContent>
        </Link>
      </Tooltip>
      <Tooltip>
        <Link href="/wishlist">
          <TooltipTrigger>
            <Badge value={countWishlist}>
              <FiHeart size={22} />
            </Badge>
          </TooltipTrigger>
          {products.length > 0 && (
            <TooltipContent className="px-1">
              <DisplayItems items={products} />
            </TooltipContent>
          )}
        </Link>
      </Tooltip>
      <Tooltip>
        <Link href="/cart">
          <TooltipTrigger>
            <Badge value={totalItems}>
              <FiShoppingCart size={22} />
            </Badge>
          </TooltipTrigger>
          {cartItems.length > 0 && (
            <TooltipContent className="px-1">
              <DisplayItems items={cartItems} />
            </TooltipContent>
          )}
        </Link>
      </Tooltip>
    </>
  );
};
