'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

export const DropdownUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        aria-label="access your profile and wish list"
        className="flex items-center"
      >
        <FiUser />
        <IoIosArrowForward
          className={`${!open ? 'rotate-90' : '-rotate-90'} duration-300`}
          size={12}
        />
      </button>
      {open && (
        <ul className="absolute flex flex-col border border-black z-10 bg-white text-sm divide-y divide-black rounded-sm drop-shadow-sm translate-y-2 animate-dropdown">
          <li className="p-1.5">
            <Link href="/">My Profile</Link>
          </li>
          <li className="p-1.5">
            <Link href="/">Wishlist</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
