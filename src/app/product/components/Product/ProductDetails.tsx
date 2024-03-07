'use client';

import { useCallback, useContext, useState } from 'react';

import { AddWishlist } from '@components/AddWishlist';
import { ErrorMessage } from '@components/ErrorMessage';
import { QuantitySelector } from '@components/QuantitySelector';
import { SizeCharts } from '@components/SizeCharts/SizeCharts';
import { Button } from '@components/UI/Button';
import { Price } from '@components/UI/Price';
import { ShoppingCartContext } from '@contexts/ShoppingCartContext/ShoppingCartContext';
import { v4 as uuidv4 } from 'uuid';

import { ColorProps } from '@shared-types/color';
import { ProductProps } from '@shared-types/product';

import { checkQuantityStock } from '@app/product/utils/checkQuantityStock';

import { Colors } from './Colors';
import { ProductReview } from './ProductReview';
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
    if (!selectedColor)
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
      sizes: sizes,
      size: selectedSize,
      color: selectedColor,
      quantity: productQuantity
    });
  };

  return (
    <div className="space-y-3">
      <h2 className="text-4xl font-bold">{name}</h2>
      <ProductReview rate={rate} />
      <Price price={price} discount={discount} size="large" />
      <p className="border-t-2 border-zinc-400 pt-3">{details}</p>
      {sizes && (
        <>
          <p className="text-4xl font-bold">Size:</p>
          <div>
            <Sizes onSizeChange={handleSizeChange} sizes={sizes} />
            <ErrorMessage message={errors.size} />
          </div>
        </>
      )}
      <Colors colors={colors} onColorChange={handleColorChange} />
      <ErrorMessage message={errors.color} />
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
        <AddWishlist product={product} background="white" />
      </div>
    </div>
  );
};
