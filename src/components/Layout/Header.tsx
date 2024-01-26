import { Keania_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';

import { MenuLinks } from '@components/MenuLinks/MenuLinks';

const keaniaOne = Keania_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const Header = () => {
  return (
    <header className="flex text-black bg-white items-center justify-between px-10 py-3">
      <div className="flex items-center gap-14">
        <Link href="/">
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
        </Link>
        <div className="max-[914px]:hidden">
          <MenuLinks />
        </div>
      </div>
      <div className="flex gap-9 text-xl max-sm:gap-4">
        <Link title="profile" href="/">
          <FiUser />
        </Link>
        <Link title="my wishlist" href="/wishlist">
          <FiHeart />
        </Link>
        <Link title="shopping cart" href="/">
          <FiShoppingCart />
        </Link>
        <div className="hidden max-[914px]:block">
          <MenuLinks />
        </div>
      </div>
    </header>
  );
};
