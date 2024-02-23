'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

type ProductImageDisplayProps = {
  images: string[];
  description: string;
};

export const ProductImageDisplay = ({
  images,
  description
}: ProductImageDisplayProps) => {
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
    <div className="flex flex-none gap-3 max-[762px]:flex-1 max-[762px]:justify-center">
      <div className="flex gap-2 flex-col flex-none">
        {images.map((image, index) => (
          <div
            id={`image-${index}`}
            key={index}
            data-image={image}
            onMouseOver={() => handleMouseOver(`image-${index}`)}
            className={`${
              selectedImage === image &&
              'outline outline-offset-2 outline-black'
            }`}
          >
            <Image
              src={image}
              priority
              alt={description}
              width={50}
              height={50}
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
          className="rounded-xl"
        />
        <div className="absolute w-full flex justify-between px-2">
          {images.length > 1 && (
            <>
              <button onClick={handlePrevImage} aria-label="see previous image">
                <FiArrowLeftCircle
                  size={36}
                  className="fill-white opacity-75 stroke-1"
                />
              </button>
              <button onClick={handleNextImage} aria-label="see later image">
                <FiArrowRightCircle
                  size={36}
                  className="fill-white opacity-75 stroke-1"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
