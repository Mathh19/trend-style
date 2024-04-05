'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Button } from '@components/UI/Button';

type GalleryProps = {
  images: string[];
  description: string;
};

export const Gallery = ({ images, description }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const positionImage = images.indexOf(selectedImage);

  const handleMouseOver = (id: string) => {
    const img = document.getElementById(id)?.dataset.image;
    setSelectedImage(img as string);
  };

  const handleNextImage = () => {
    if (positionImage + 1 === images.length) return setSelectedImage(images[0]);
    setSelectedImage(images[positionImage + 1]);
  };

  const handlePrevImage = () => {
    if (positionImage === 0) return setSelectedImage(images[images.length - 1]);
    setSelectedImage(images[positionImage - 1]);
  };

  return (
    <div>
      <div className="flex gap-1.5">
        <div className="space-y-1.5">
          {images.map((image, index) => (
            <div
              id={`image-${index}`}
              key={index}
              data-image={image}
              onMouseOver={() => handleMouseOver(`image-${index}`)}
              className={`${
                selectedImage === image &&
                'outline rounded-sm outline-offset-1 outline-black'
              }`}
            >
              <Image
                src={image}
                priority
                alt={description}
                width={80}
                height={80}
                className="rounded-sm"
              />
            </div>
          ))}
        </div>

        <div className="relative flex items-center">
          <Image
            src={selectedImage}
            priority
            alt={description}
            width={300}
            height={400}
            sizes="(max-width: 762px) 100vw"
            className="rounded-lg"
          />

          <div className="absolute px-1.5 w-full flex justify-between">
            {images.length > 1 && (
              <>
                <Button
                  onClick={handlePrevImage}
                  aria-label="see previous image"
                  icon={<FiChevronLeft size={26} />}
                  className="bg-white/70 border-2 border-black rounded-full p-0 text-black"
                />
                <Button
                  onClick={handleNextImage}
                  aria-label="see later image"
                  icon={<FiChevronRight size={26} />}
                  className="bg-white/70 border-2 border-black rounded-full p-0 text-black"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
