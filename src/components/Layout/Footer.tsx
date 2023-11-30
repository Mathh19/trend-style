'use client';

import { Keania_One } from 'next/font/google';
import { FaXTwitter } from 'react-icons/fa6';
import { FiPhone, FiSend } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import { LuFacebook } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const keaniaOne = Keania_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const Footer = () => {
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer id="Contact">
      <header className="flex flex-wrap gap-9 justify-between items-center text-center border-b border-black p-10 max-sm:justify-center">
        <h2 className={`${keaniaOne.className} text-5xl`}>Trend Styles</h2>
        <ul className="flex gap-7 text-4xl">
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <LuFacebook />
          </li>
          <li>
            <FaXTwitter />
          </li>
        </ul>
      </header>
      <div className="flex w-full justify-between gap-9 p-9 flex-wrap">
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Contact us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2.5">
              <FiPhone size={20} /> +9999999999
            </li>
            <li className="flex items-center gap-2.5">
              <MdOutlineEmail size={20} />{' '}
              <span className="underline">trendsyles@example.com</span>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Support</h3>
          <ul className="space-y-2">
            <li>Policy and Privacy</li>
            <li>Returns & Refunds</li>
            <li>Shipping information</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Subscriptions to offers</h3>
          <form className="relative w-full">
            <input
              type="email"
              placeholder="your email"
              className="w-full soutline-black border-2 border-black p-1.5"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="absolute flex items-center justify-center bottom-0 right-0 text-white bg-black p-1.5 h-10 w-10"
            >
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
