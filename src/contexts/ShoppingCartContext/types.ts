import { CartItemsProps } from '@shared-types/cart-items';

export type ShoppingCartContextProps = {
  cartItems: CartItemsProps[];
  totalItems: number;
  addItems: (item: CartItemsProps) => void;
  updateItem: (item: CartItemsProps) => void;
  deleteItem: (itemId: string | number) => void;
  clearCart: () => void;
};
