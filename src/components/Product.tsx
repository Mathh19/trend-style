import Link from 'next/link';
import { MdOutlineStar } from 'react-icons/md';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { ProductProps } from '@shared-types/product';

import { AddWishlist } from './AddWishlist';
import { Button } from './UI/Button';
import { Price } from './UI/Price';

export const Product = ({ product }: { product: ProductProps }) => {
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
      <Link href={`./product/${product.id}`} className="group">
        <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
          <div className="flex justify-between">
            <p className="text-left group-hover:underline">{product.name}</p>
            <Price price={product.price} discount={product.discount} />
          </div>
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, index) => {
              return <MdOutlineStar key={index} />;
            })}
            <span className="ml-1 text-xs text-zinc-600">({product.rate})</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
