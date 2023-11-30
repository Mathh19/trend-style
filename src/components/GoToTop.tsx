'use client';
import { useState, useEffect } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      aria-label="Go top the page"
      href="#"
      className={`${
        visible ? 'block' : 'hidden'
      } fixed right-4 bottom-4 p-1.5 text-white border bg-black rotate-90 rounded-full text-2xl duration-200 ease-in-out hover:bg-white hover:text-black hover:border-black`}
    >
      <MdOutlineArrowBackIosNew />
    </a>
  );
};
