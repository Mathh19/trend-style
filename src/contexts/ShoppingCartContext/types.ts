import { cartItemsProps } from '@shared-types/cart-items';

export type ShoppingCartContextProps = {
  cartItems: cartItemsProps[];
  totalItems: number;
  addItems: (item: cartItemsProps) => void;
  clearCart: () => void;
};
