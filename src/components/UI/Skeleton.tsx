import { ComponentProps } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

const div = tv({
  base: 'bg-gradient-to-r rounded-sm from-zinc-500 to-zinc-600 w-full h-16 animate-pulse',
  variants: {
    variant: {
      avatar: 'rounded-full',
      rectangular: 'rounded-sm'
    }
  },
  defaultVariants: {
    variant: 'rectangular'
  }
});

type SkeletonProps = ComponentProps<'div'> & VariantProps<typeof div>;

export const Skeleton = ({ className, variant }: SkeletonProps) => {
  return <div className={div({ variant: variant, class: className })}></div>;
};
