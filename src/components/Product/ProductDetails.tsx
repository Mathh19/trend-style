'use client';

import { useCallback, useContext, useState } from 'react';

import { AddWishlist } from '@components/AddWishlist';
import { ErrorMessage } from '@components/ErrorMessage';
import { QuantitySelector } from '@components/QuantitySelector';
import { SizeCharts } from '@components/SizeCharts/SizeCharts';
import { Button } from '@components/UI/Button';
import { Price } from '@components/UI/Price';
import { Rating } from '@components/UI/Rating';
import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';
import { v4 as uuidv4 } from 'uuid';

import { ColorProps } from '@shared-types/color';
import { ProductProps } from '@shared-types/product';

import { checkQuantityStock } from '@app/product/utils/checkQuantityStock';

import { Colors } from './Colors';
import { Sizes } from './Sizes';

type ProductDetails = {
  product: ProductProps;
};

export const ProductDetails = ({ product }: ProductDetails) => {
  const { addItems } = useContext(ShoppingCartContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState({
    name: '',
    hex: ''
  });
  const [selectedSize, setSelectedSize] = useState('');
  const [errors, setErrors] = useState({
    size: '',
    color: '',
    quantity: ''
  });
  const {
    id,
    name,
    stock,
    rate,
    rate_count,
    category,
    price,
    discount,
    details,
    sizes,
    colors,
    img
  } = product;

  const handleSizeChange = useCallback(
    (size: string) => {
      setSelectedSize(size);
      setErrors({ ...errors, size: '' });
    },
    [errors]
  );
  const handleColorChange = useCallback(
    (color: ColorProps) => {
      setSelectedColor(color);
      setErrors({ ...errors, color: '' });
    },
    [errors]
  );
  const handleQuantityChange = useCallback(
    (quantity: number) => {
      setProductQuantity(quantity);
      setErrors({ ...errors, quantity: '' });
    },
    [errors]
  );

  const addProductToCart = () => {
    if (!product) return;
    if (!selectedSize)
      return setErrors({ ...errors, size: 'Please choose a size.' });
    if (selectedColor.hex === '' || selectedColor.name === '')
      return setErrors({ ...errors, color: 'Please choose a color.' });
    if (checkQuantityStock(id, productQuantity))
      return setErrors({ ...errors, quantity: 'Out of stock.' });

    setErrors({ size: '', color: '', quantity: '' });

    addItems({
      cartId: uuidv4(),
      id,
      img,
      name,
      price,
      discount,
      stock,
      category,
      sizes,
      colors,
      size: selectedSize,
      color: selectedColor,
      quantity: productQuantity
    });
  };

  return (
    <div className="flex-1 text-left space-y-2">
      <div className="border-b-2 pb-2 space-y-2 border-zinc-400">
        <h2 className="text-3xl font-bold">{name}</h2>
        <Rating rate={rate} rate_count={rate_count} />
        <Price price={price} discount={discount} size="large" />
      </div>

      <p>{details}</p>

      <div className="space-y-1">
        <p className="text-2xl font-semibold">Sizes:</p>
        <Sizes onSizeChange={handleSizeChange} sizes={sizes} />
        <ErrorMessage message={errors.size} />
      </div>

      <div className="space-y-1">
        <p className="text-2xl font-semibold">Colors:</p>
        <Colors colors={colors} onColorChange={handleColorChange} />
        <ErrorMessage message={errors.color} />
      </div>

      <QuantitySelector stock={stock} onQuantityChange={handleQuantityChange} />
      <ErrorMessage message={errors.quantity} />
      <span className="text-sm text-zinc-600">{stock} in stock</span>

      <SizeCharts />

      <div className="flex items-center gap-4">
        <Button
          onClick={addProductToCart}
          text="Add to cart"
          className="uppercase shadow-md"
        />
        <AddWishlist product={product} />
      </div>
    </div>
  );
};
