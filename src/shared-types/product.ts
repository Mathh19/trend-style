import { ColorProps } from './color';

export type ProductProps = {
  id: number;
  name: string;
  rate: number;
  price: number;
  colors: ColorProps[];
  sizes?: string[];
  details?: string;
  category: string;
  discount?: number;
  quantity: number;
  img: string[];
};
