'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ProductProps } from '@shared-types/product';

import { AddShoppingCart } from './AddShoppingCart';
import { AddWishlist } from './AddWishlist';
import { Price } from './UI/Price';
import { Rating } from './UI/Rating';

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const pathname = usePathname();
  const link =
    pathname === `/product/${product.id}`
      ? product.id.toString()
      : `/product/${product.id}`;

  return (
    <div className="relative shadow-md w-52 h-full border">
      <div className="absolute flex w-full justify-between p-2">
        <AddWishlist product={product} />
        <AddShoppingCart productId={product.id.toString()} />
      </div>

      <Image
        src={product.img[0]}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-full"
      />

      <Link href={link} className="group">
        <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
          <div className="flex flex-wrap justify-between">
            <p className="text-left group-hover:underline">{product.name}</p>
            <Price
              size="small"
              price={product.price}
              discount={product.discount}
            />
          </div>

          <Rating
            size="small"
            rate={product.rate}
            rate_count={product.rate_count}
          />
        </div>
      </Link>
    </div>
  );
};
