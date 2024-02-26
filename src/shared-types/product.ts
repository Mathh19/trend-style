export type ProductProps = {
  id: number;
  name: string;
  rate: number;
  price: number;
  colors: { name: string; hex: string }[];
  sizes?: string[];
  details?: string;
  discount?: number;
  img: string[];
};
