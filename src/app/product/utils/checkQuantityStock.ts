import { cartItemsProps } from '@shared-types/cart-items';

import products from '../../../contents/all-products.json';

export const checkQuantityStock = (productId: number, quantity: number) => {
  const product = products.find((element) => element.id === productId);
  if (!product) return console.log('not found product.');

  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const cartItemsArray: cartItemsProps[] = JSON.parse(cartItems);
    const cartItemsFiltered = cartItemsArray.filter(
      (item) => item.id === productId
    );
    const totalCartItems = cartItemsFiltered.reduce(
      (acc, currentItem) => acc + currentItem.quantity,
      0
    );
    return totalCartItems + quantity > product.quantity;
  }
};
