import { Skeleton } from '@components/UI/Skeleton';

export const LoadingProduct = () => {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:items-center">
      <Skeleton className="max-w-xs h-96" />

      <div className="flex-1 w-full space-y-2">
        <Skeleton className="h-10" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  );
};
