import { ProductProps } from '@components/Product';

export type WishlistContextProps = {
  products: ProductProps[];
  addProducts: (product: ProductProps) => void;
  removeProduct: (id: number) => void;
  clearWishList: () => void;
};
