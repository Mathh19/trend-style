import { Keania_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { MenuLinks } from '@components/MenuLinks';
import { UserHub } from '@components/UserHub';

const keaniaOne = Keania_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const Header = () => {
  return (
    <header className="flex text-black bg-white items-center justify-between px-10 py-3 max-sm:px-4">
      <div className="flex items-center gap-14">
        <Link href="/">
          <p className={`${keaniaOne.className} text-4xl max-sm:hidden`}>
            Trend Styles
          </p>
          <Image
            priority
            width={50}
            height={50}
            alt="Logo site"
            src="/logo.svg"
            className="hidden w-[50px] h-[50px] max-sm:block"
          />
        </Link>
        <div className="max-[914px]:hidden">
          <MenuLinks />
        </div>
      </div>
      <div className="flex gap-9 text-xl max-sm:gap-7">
        <UserHub />
        <div className="hidden max-[914px]:block">
          <MenuLinks />
        </div>
      </div>
    </header>
  );
};
