import Image from 'next/image';
import Link from 'next/link';

export const CartEmpty = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center w-full gap-3">
      <Image
        src="/empty-cart.svg"
        alt="empty shopping cart"
        width={180}
        height={180}
      />
      <p>Your shopping cart is empty.</p>
      <Link
        href="/"
        className="font-normal max-w-[216px] w-full flex bg-black text-white rounded-sm justify-center py-1 shadow-sm"
      >
        Shop now
      </Link>
    </div>
  );
};
