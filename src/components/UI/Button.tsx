import { ComponentProps, ElementType } from 'react';

import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex justify-center items-center gap-2 bg-black text-white p-2 font-semibold rounded-sm'
});

type ButtonProps = {
  icon?: ElementType;
  iconSize?: number;
  text?: string;
} & ComponentProps<'button'>;

export const Button = ({
  icon: Icon,
  iconSize,
  text,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={button({ class: className })}>
      {text}
      {Icon && <Icon size={iconSize} />}
    </button>
  );
};
