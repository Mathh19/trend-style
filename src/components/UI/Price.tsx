import { VariantProps, tv } from 'tailwind-variants';

import { calculateDiscount } from '@utils/calculate-discount';
import { formatCurrency } from '@utils/format-currency';

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
  const priceWithDiscount = discount && calculateDiscount(price, discount);

  return (
    <div className={div({ size })}>
      <p className={`${discount ? 'line-through' : ''}`}>
        {formatCurrency(price)}
      </p>
      {priceWithDiscount && (
        <p className="text-red-700">{formatCurrency(priceWithDiscount)}</p>
      )}
    </div>
  );
};
