'use client';

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { Links } from './Links';

const links = ['Home', 'Products', 'Promotions', 'About', 'Contact'];

export const MenuLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="flex gap-6 font-medium max-[914px]:hidden">
        {links.map((link) => (
          <Links key={link} link={link}>
            {link}
          </Links>
        ))}
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="hidden max-[914px]:block relative z-50"
      >
        {!open ? <FiMenu /> : <IoMdClose />}
      </button>
      <div
        className={`hidden min-h-screen bg-white fixed max-[914px]:flex justify-center z-40 inset-0 duration-500 ease-in-out ${
          !open ? 'translate-x-[914px]' : 'translate-x-0'
        }`}
      >
        <ul className="relative flex flex-col justify-center items-center gap-5 text-lg z-50">
          {links.map((link) => (
            <Links key={link} link={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </Links>
          ))}
        </ul>
      </div>
    </>
  );
};
