import { products } from '@data/products';

import { CartItemsProps } from '@shared-types/cart-items';

export const checkQuantityStock = (productId: number, quantity: number) => {
  const product = products.find((element) => element.id === productId);

  if (!product) throw new Error('Product not found.');

  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const cartItemsArray: CartItemsProps[] = JSON.parse(cartItems);
    const totalCartItems = cartItemsArray
      .filter((item) => item.id === productId)
      .reduce((acc, currentItem) => acc + currentItem.quantity, 0);

    return totalCartItems + quantity > product.stock;
  }
};
