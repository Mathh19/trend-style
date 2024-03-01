import { Rating } from '@mui/material';

type ProductReviewProps = {
  rate: number;
};

export const ProductReview = ({ rate }: ProductReviewProps) => {
  return (
    <div className="flex items-center gap-1">
      <Rating name="read-only" value={4.5} precision={0.5} />
      <span className="text-zinc-600">({rate})</span>
    </div>
  );
};
