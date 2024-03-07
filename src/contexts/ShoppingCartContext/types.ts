import { CartItemsProps } from '@shared-types/cart-items';

export type ShoppingCartContextProps = {
  cartItems: CartItemsProps[];
  totalItems: number;
  addItems: (item: CartItemsProps) => void;
  clearCart: () => void;
};
