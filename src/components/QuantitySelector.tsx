'use client';

import { ChangeEvent, useState } from 'react';

type QuantitySelectorProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export const QuantitySelector = ({
  quantity,
  onQuantityChange
}: QuantitySelectorProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const quantityValue = e.target.value;
    if (isNaN(Number(quantityValue))) return;
    if (Number(quantityValue) > quantity) return;
    if (Number(quantityValue) < 1) return setProductQuantity(1);
    onQuantityChange(Number(quantityValue));
    setProductQuantity(Number(quantityValue));
  };

  const decrementQuantity = () => {
    onQuantityChange(Number(productQuantity - 1));
    setProductQuantity((prevCount) => prevCount - 1);
  };
  const incrementQuantity = () => {
    onQuantityChange(Number(productQuantity + 1));
    setProductQuantity((prevCount) => prevCount + 1);
  };

  return (
    <label className="flex" htmlFor="product_count">
      <button
        disabled={productQuantity <= 1}
        onClick={decrementQuantity}
        className="bg-black text-white w-7 h-7 disabled:bg-zinc-300"
      >
        -
      </button>
      <input
        id="product_count"
        type="text"
        value={productQuantity.toString()}
        onChange={handleChange}
        className="border text-center border-black w-7 h-7"
      />
      <button
        disabled={productQuantity >= quantity}
        onClick={incrementQuantity}
        className="bg-black text-white w-7 h-7 disabled:bg-zinc-300"
      >
        +
      </button>
    </label>
  );
};
