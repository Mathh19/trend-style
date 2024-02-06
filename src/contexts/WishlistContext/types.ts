import { ProductProps } from '@shared-types/product';

export type WishlistContextProps = {
  products: ProductProps[];
  addProducts: (product: ProductProps) => void;
  removeProduct: (id: number) => void;
  clearWishList: () => void;
};
