import { Skeleton } from './Skeleton';

export const SkeletonProducts = () => {
  return (
    <div className="flex justify-around gap-16 flex-wrap">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="w-72 rounded h-96" />
      ))}
    </div>
  );
};
