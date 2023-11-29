import { IoIosHeartEmpty } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import { TbShoppingCartPlus } from 'react-icons/tb';

type ProductProps = {
  name: string;
  rate: number;
  price: number;
  img: string;
};

export const Product = ({ name, rate, price, img }: ProductProps) => {
  return (
    <div className="relative w-72 h-92 border drop-shadow-md">
      <div className="absolute flex w-full justify-between p-2">
        <button className="text-2xl">
          <IoIosHeartEmpty />
        </button>
        <button className="bg-white p-1 rounded-md text-2xl">
          <TbShoppingCartPlus />
        </button>
      </div>
      <img src={img} alt="description" className="w-full h-full" />
      <div className="absolute bg-white w-full bottom-0 p-2 space-y-1">
        <div className="flex justify-between">
          <p>{name}</p>
          <p>${price}</p>
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
