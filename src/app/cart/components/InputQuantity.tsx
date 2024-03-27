'use client';

import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';

import { CartItemsProps } from '@shared-types/cart-items';

import { checkQuantityStock } from '@app/product/utils/checkQuantityStock';

type InputQuantityProps = {
  product: CartItemsProps;
};

export const InputQuantity = ({ product }: InputQuantityProps) => {
  const { updateItem } = useContext(ShoppingCartContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const quantityValue = e.target.value;
    if (isNaN(Number(quantityValue))) return;
    if (checkQuantityStock(product.id, Number(quantityValue))) return;
    if (Number(quantityValue) < 1) return setProductQuantity(1);
    setProductQuantity(Number(quantityValue));
  };

  const handleInputBlur = () => {
    if (!isInputFocused) return;
    if (productQuantity >= product.stock) return setIsInputFocused(false);
    updateItem({ ...product, quantity: productQuantity });
    setIsInputFocused(false);
  };

  const decrementQuantity = () => {
    updateItem({ ...product, quantity: product.quantity - 1 });
  };
  const incrementQuantity = () => {
    if (checkQuantityStock(product.id, 1)) return;
    updateItem({ ...product, quantity: product.quantity + 1 });
  };

  useEffect(() => {
    setProductQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <div className="relative">
      <div className="flex">
        <button
          disabled={productQuantity <= 1}
          onClick={decrementQuantity}
          className="bg-black flex items-center justify-center text-white w-7 h-7 disabled:bg-zinc-300"
        >
          -
        </button>
        <label htmlFor={`quantity-${product.cartId}`} />
        <input
          type="text"
          id={`quantity-${product.cartId}`}
          onBlur={handleInputBlur}
          onFocus={() => setIsInputFocused(true)}
          value={productQuantity}
          onChange={handleChange}
          className="border text-xs text-center border-black w-7 h-7"
        />
        <button
          disabled={checkQuantityStock(product.id, 1)}
          onClick={incrementQuantity}
          className="bg-black flex items-center justify-center text-white w-7 h-7 disabled:bg-zinc-300"
        >
          +
        </button>
      </div>
    </div>
  );
};
