import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

import { VariantProps, tv } from 'tailwind-variants';

const star = tv({
  variants: {
    size: {
      small: 'text-sm',
      default: 'text-base',
      large: 'text-lg'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

type RatingProps = {
  rate: number;
  rate_count?: number;
} & VariantProps<typeof star>;

export const Rating = ({ rate, rate_count, size }: RatingProps) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span key={index} className={star({ size, class: 'px-[2px]' })}>
        {rate >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : rate >= num ? (
          <FaRegStarHalfStroke className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-zinc-400" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{ratingStars}</div>
      {rate_count && (
        <span className="text-xs text-zinc-600">({rate_count})</span>
      )}
    </div>
  );
};
