import { Keania_One } from 'next/font/google';
import Image from 'next/image';
import { FiUser, FiShoppingCart, FiHeart } from 'react-icons/fi';

import { MenuLinks } from '@components/MenuLinks/MenuLinks';

const keaniaOne = Keania_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const Header = () => {
  return (
    <header className="flex fixed w-full bg-white items-center justify-between px-10 py-3">
      <div className="flex items-center gap-14">
        <p className={`${keaniaOne.className} text-4xl max-sm:hidden`}>
          Trend Styles
        </p>
        <Image
          className="hidden max-sm:block"
          width={50}
          height={50}
          alt="Logo site"
          src="/logo.svg"
        />
        <div className="max-[914px]:hidden">
          <MenuLinks />
        </div>
      </div>
      <div className="flex gap-9 text-xl max-sm:gap-4">
        <FiUser />
        <FiHeart />
        <FiShoppingCart />
        <div className="hidden max-[914px]:block">
          <MenuLinks />
        </div>
      </div>
    </header>
  );
};
