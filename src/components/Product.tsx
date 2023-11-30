import { IoIosHeartEmpty } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { calculateDiscount } from '@utils/calculate-discount';

export type ProductProps = {
  name: string;
  rate: number;
  price: number;
  discount?: number;
  img: string[];
};

export const Product = ({ name, rate, price, discount, img }: ProductProps) => {
  return (
    <div className="relative w-72 h-92 border drop-shadow-md">
      <div className="absolute flex w-full justify-between p-2">
        <button className="text-2xl text-red-500">
          <IoIosHeartEmpty />
        </button>
        <button className="bg-white p-1 rounded-md text-2xl">
          <TbShoppingCartPlus />
        </button>
      </div>
      <img src={img[0]} alt={name} className="w-full h-full" />
      <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
        <div className="flex justify-between">
          <p className="text-left">{name}</p>
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
    </div>
  );
};
