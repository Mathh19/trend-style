import { cartItemsProps } from '../types';

export const isSameProduct = (
  existingProduct: cartItemsProps,
  currentProduct: cartItemsProps
) => {
  return (
    existingProduct.id === currentProduct.id &&
    existingProduct.color === currentProduct.color &&
    existingProduct.size === currentProduct.size &&
    existingProduct.price === currentProduct.price &&
    existingProduct.discount === currentProduct.discount
  );
};
