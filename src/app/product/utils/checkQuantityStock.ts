import { cartItemsProps } from '@shared-types/cart-items';

import products from '../../../contents/all-products.json';

export const checkQuantityStock = (productId: number, quantity: number) => {
  const product = products.find((element) => element.id === productId);

  if (!product) throw new Error('Product not found.');

  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const cartItemsArray: cartItemsProps[] = JSON.parse(cartItems);
    const totalCartItems = cartItemsArray
      .filter((item) => item.id === productId)
      .reduce((acc, currentItem) => acc + currentItem.quantity, 0);

    return totalCartItems + quantity > product.stock;
  }
};
