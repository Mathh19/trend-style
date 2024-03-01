import { ColorProps } from './color';
import { ProductProps } from './product';

export type cartItemsProps = {
  color: ColorProps;
  size: string;
} & Omit<ProductProps, 'sizes' | 'colors' | 'details' | 'rate' | 'category'>;
