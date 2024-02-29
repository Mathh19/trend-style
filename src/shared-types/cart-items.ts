import { ProductProps } from './product';

export type cartItemsProps = {
  color: string;
  size: string;
} & Omit<ProductProps, 'sizes' | 'colors' | 'details' | 'rate' | 'category'>;
