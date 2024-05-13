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
    <div className="w-64 space-y-2">
      <div className="shadow-md border">
        <Image
          src={product.img[0]}
          alt={product.name}
          width={500}
          height={500}
          priority
          className="object-cover"
        />

        <Link href={link} className="group">
          <div className="bg-white w-full p-2 space-y-1">
            <p className="text-left truncate group-hover:underline">
              {product.name}
            </p>
            <Price
              size="small"
              price={product.price}
              discount={product.discount}
            />

            <Rating
              size="small"
              rate={product.rate}
              rate_count={product.rate_count}
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-between">
        <AddShoppingCart productId={product.id.toString()} />
        <AddWishlist product={product} />
      </div>
    </div>
  );
};
