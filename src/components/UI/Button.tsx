import { ComponentProps } from 'react';

import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex justify-center items-center gap-2 bg-black text-white p-2 font-semibold rounded-sm'
});

type ButtonProps = {
  icon?: React.ReactElement;
  text?: string;
} & ComponentProps<'button'>;

export const Button = ({ icon, text, className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={button({ class: className })}>
      {text}
      {icon}
    </button>
  );
};
