import { VariantProps, tv } from 'tailwind-variants';

import { calculateDiscount } from '@utils/calculate-discount';

const div = tv({
  base: 'flex gap-2.5',
  variants: {
    size: {
      default: 'text-base',
      medium: 'text-xl font-semibold',
      large: 'text-2xl font-bold'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

type PriceProps = {
  price: number;
  discount?: number;
} & VariantProps<typeof div>;

export const Price = ({ price, size, discount }: PriceProps) => {
  return (
    <div className={div({ size })}>
      <p className={`${discount ? 'line-through' : ''}`}>${price}</p>
      {discount && (
        <p className="text-red-700">${calculateDiscount(price, discount)}</p>
      )}
    </div>
  );
};
