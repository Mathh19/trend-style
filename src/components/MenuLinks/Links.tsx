import Link from 'next/link';

import { LinksProps } from './types';

export const Links = ({ link, children, onClick }: LinksProps) => {
  return (
    <>
      <li>
        <Link href={`#${link}`} onClick={onClick}>
          {children}
        </Link>
      </li>
    </>
  );
};
