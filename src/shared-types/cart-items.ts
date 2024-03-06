import { ColorProps } from './color';
import { ProductProps } from './product';

export type cartItemsProps = {
  color: ColorProps;
  size: string;
  quantity: number;
} & Omit<ProductProps, 'sizes' | 'colors' | 'details' | 'rate' | 'category'>;
