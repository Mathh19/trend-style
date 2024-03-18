import { CartItemsProps } from '@shared-types/cart-items';

export const isSameProduct = (
  existingProduct: CartItemsProps,
  currentProduct: CartItemsProps
) => {
  return (
    existingProduct.id === currentProduct.id &&
    existingProduct.color.hex === currentProduct.color.hex &&
    existingProduct.size === currentProduct.size &&
    existingProduct.price === currentProduct.price &&
    existingProduct.discount === currentProduct.discount
  );
};
