import { ColorProps } from './color';
import { ProductProps } from './product';

export type CartItemsProps = {
  cartId: string | number;
  color: ColorProps;
  size: string;
  quantity: number;
} & Omit<ProductProps, 'details' | 'rate' | 'category'>;
