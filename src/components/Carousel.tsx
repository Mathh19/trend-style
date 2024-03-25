'use client';

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  {
    url: './bg-carousel-1.png',
    description: 'Image informing new products with a 30 to 50 percent discount'
  },
  {
    url: './bg-carousel-2.png',
    description: 'Image informing new collections in store'
  }
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleControllSlide = (state: 'prev' | 'next') => {
    if (state === 'prev') {
      setCurrentIndex((prevCurrentIndex) =>
        prevCurrentIndex === 0 ? prevCurrentIndex : prevCurrentIndex - 1
      );
    } else {
      setCurrentIndex((prevCurrentIndex) =>
        prevCurrentIndex === images.length - 1
          ? prevCurrentIndex
          : prevCurrentIndex + 1
      );
    }
  };

  return (
    <div className="flex items-center w-full m-auto relative group">
      <img
        src={`${images[currentIndex].url}`}
        className="w-full"
        alt={images[currentIndex].description}
      />
      <button
        onClick={() => handleControllSlide('prev')}
        aria-label="prev to image"
        className={`${
          currentIndex === 0 ? 'hidden' : 'block'
        } absolute left-2 text-white text-4xl rounded-full duration-200 hover:bg-black/40`}
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={() => handleControllSlide('next')}
        aria-label="next to image"
        className={` ${
          currentIndex === images.length - 1 ? 'hidden' : 'block'
        } absolute right-2 text-white text-4xl rounded-full duration-200 hover:bg-black/40`}
      >
        <FiChevronRight />
      </button>
      <div className="absolute flex justify-center gap-2 px-16 py-1.5 w-full bottom-0">
        {images.map((_, index) => (
          <span
            key={index}
            className={`${
              currentIndex === index ? 'bg-white' : 'bg-white/30'
            } w-full max-w-[65px] h-2 rounded-md`}
          ></span>
        ))}
      </div>
    </div>
  );
};
