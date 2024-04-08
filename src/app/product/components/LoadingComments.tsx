import { Skeleton } from '@components/UI/Skeleton';

export const LoadingComments = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton variant="avatar" className="w-14 h-14" />

            <div className="flex-1 space-y-2">
              <Skeleton variant="rectangular" className="h-4" />
              <Skeleton variant="rectangular" className="h-4" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton variant="rectangular" className="h-4" />
            <Skeleton variant="rectangular" className="h-4" />
          </div>
        </div>
      ))}
    </>
  );
};
