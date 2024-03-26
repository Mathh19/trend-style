'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { ProductProps } from '@shared-types/product';

import { AddWishlist } from './AddWishlist';
import { Rating } from './Rating';
import { Button } from './UI/Button';
import { Price } from './UI/Price';

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const pathname = usePathname();
  const link =
    pathname === `/product/${product.id}`
      ? product.id.toString()
      : `/product/${product.id}`;

  return (
    <div className="relative w-72 h-92 border drop-shadow-md">
      <div className="absolute flex w-full justify-between p-2">
        <AddWishlist product={product} />
        <Button
          aria-label="add to shopping cart"
          className="bg-white p-1 rounded-md text-black text-2xl"
          icon={TbShoppingCartPlus}
        />
      </div>
      <img src={product.img[0]} alt={product.name} className="w-full h-full" />
      <Link href={link} className="group">
        <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
          <div className="flex flex-wrap justify-between">
            <p className="text-left group-hover:underline">{product.name}</p>
            <Price price={product.price} discount={product.discount} />
          </div>
          <Rating rate={product.rate} rate_count={product.rate_count} />
        </div>
      </Link>
    </div>
  );
};
