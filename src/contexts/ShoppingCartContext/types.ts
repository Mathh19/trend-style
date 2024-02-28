export type cartItemsProps = {
  id: number;
  size: string;
  color: string;
  quantity: number;
  price: number;
  discount?: number;
};

export type ShoppingCartContextProps = {
  cartItems: cartItemsProps[];
  totalItems: number;
  addItems: (item: cartItemsProps) => void;
  clearCart: () => void;
};
