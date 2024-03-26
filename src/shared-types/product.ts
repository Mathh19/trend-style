import { ColorProps } from './color';

export type ProductProps = {
  id: number;
  name: string;
  rate: number;
  rate_count: number;
  price: number;
  category: string;
  colors: ColorProps[];
  sizes: string[];
  details?: string;
  stock: number;
  discount?: number;
  img: string[];
};
