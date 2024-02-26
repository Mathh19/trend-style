'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { TbRuler2 } from 'react-icons/tb';

import { Modal } from '../UI/Modal';
import { TableSizes } from './TableSizes';

export const SizeCharts = () => {
  const [open, setOpen] = useState(false);
  const tShirtSizes = [
    { size: 'S', width: 75, length: 55, sleeve: 26 },
    { size: 'M', width: 78, length: 56, sleeve: 28 },
    { size: 'X', width: 80, length: 57, sleeve: 28 },
    { size: 'XL', width: 82, length: 60, sleeve: 28 }
  ];
  const tShirtLongSleeveSizes = [
    { size: 'S', width: 75, length: 55, sleeve: 56 },
    { size: 'M', width: 78, length: 56, sleeve: 58 },
    { size: 'X', width: 80, length: 57, sleeve: 59 },
    { size: 'XL', width: 82, length: 60, sleeve: 60 }
  ];
  const shoeSizes = [
    { size: 'EUR36', platform_height: 2.5, internal_length: 24 },
    { size: 'EUR37', platform_height: 2.5, internal_length: 24.5 },
    { size: 'EUR38', platform_height: 2.5, internal_length: 25 },
    { size: 'EUR39', platform_height: 2.5, internal_length: 25.5 },
    { size: 'EUR40', platform_height: 2.5, internal_length: 26 },
    { size: 'EUR41', platform_height: 2.5, internal_length: 26.5 },
    { size: 'EUR42', platform_height: 2.5, internal_length: 27 },
    { size: 'EUR43', platform_height: 2.5, internal_length: 27.5 },
    { size: 'EUR44', platform_height: 2.5, internal_length: 28 },
    { size: 'EUR45', platform_height: 2.5, internal_length: 28.5 },
    { size: 'EUR46', platform_height: 2.5, internal_length: 29 },
    { size: 'EUR47', platform_height: 2.5, internal_length: 29.5 }
  ];

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 underline"
      >
        <TbRuler2 size={24} className="stroke-1" /> size guide
      </button>
      <Modal.Root isOpen={open} setOpen={() => setOpen(false)}>
        <Modal.Header>
          <h1 className="text-lg font-semibold text-center w-full">
            Size Charts
          </h1>
          <button
            onClick={() => setOpen(false)}
            className="border-2 w-7 h-7 flex items-center justify-center border-black rounded-full bg-white duration-150 transition hover:bg-black hover:text-white"
          >
            <IoCloseOutline size={24} />
          </button>
        </Modal.Header>
        <Modal.Content>
          <div className="flex flex-col p-5">
            <Image
              src="/t-shirt-en.svg"
              alt="Image of a shirt showing its length"
              width={360}
              height={360}
            />
            <div className="flex flex-col gap-5">
              <TableSizes
                caption="T-shirt"
                head={['width', 'length', 'sleeve']}
                shirts={tShirtSizes}
              />
              <TableSizes
                caption="T-shirt Long Sleeve"
                head={['width', 'length', 'sleeve']}
                shirts={tShirtLongSleeveSizes}
              />
              <TableSizes
                caption="Shoes"
                head={['size', 'platform height(cm)', 'internal length(cm)']}
                shoes={shoeSizes}
              />
            </div>
          </div>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};
