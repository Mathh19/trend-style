import { Rating } from '@mui/material';

type ProductReviewProps = {
  rate: number;
  rate_count: number;
};

export const ProductReview = ({ rate, rate_count }: ProductReviewProps) => {
  return (
    <div className="flex items-center gap-1">
      <Rating name="read-only" value={rate} precision={0.5} />
      <span className="text-zinc-600">({rate_count})</span>
    </div>
  );
};
