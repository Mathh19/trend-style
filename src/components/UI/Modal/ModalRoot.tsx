'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { VariantProps, tv } from 'tailwind-variants';

const content = tv({
  base: 'z-[90] max-h-[95%] overflow-x-hidden rounded-lg',
  variants: {
    size: {
      default: 'w-full max-w-lg',
      full: 'w-full max-w-none'
    },
    overflow: {
      true: 'overflow-y-auto'
    }
  },
  defaultVariants: {
    size: 'default',
    overflow: true
  }
});

type ModalRootProps = {
  isOpen: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  overflow?: boolean;
} & VariantProps<typeof content>;

export const ModalRoot = ({
  isOpen,
  setOpen,
  size,
  overflow,
  children
}: ModalRootProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    if (!isOpen) document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            onClick={setOpen}
            className="fixed min-h-screen inset-0 z-[80] flex items-center justify-center bg-black/60 px-10"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={content({ size, overflow })}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
