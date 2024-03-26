import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

type RatingProps = {
  rate: number;
  rate_count?: number;
};

export const Rating = ({ rate, rate_count }: RatingProps) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span key={index} className="px-[2px]">
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
        <span className="text-sm text-zinc-600">({rate_count})</span>
      )}
    </div>
  );
};
