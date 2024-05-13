'use client';

import { useState } from 'react';
import { VscClose } from 'react-icons/vsc';

import { Product } from './Product/Product';
import { Button } from './UI/Button';
import { Modal } from './UI/Modal';

type AddShoppingCartProps = {
  productId: string;
};

export const AddShoppingCart = ({ productId }: AddShoppingCartProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        text="Add to cart"
        className="font-semibold border border-white shadow-md"
      />

      <Modal.Root size="full" isOpen={open} setOpen={() => setOpen(false)}>
        <Modal.Header>
          <div className="flex w-full justify-end">
            <Button
              className="border border-black transition-all hover:text-black hover:bg-white"
              icon={<VscClose />}
              onClick={() => setOpen(false)}
            />
          </div>
        </Modal.Header>
        <Modal.Content>
          <div className="p-10">
            <Product productId={productId} />
          </div>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};
