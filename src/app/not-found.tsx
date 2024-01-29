import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <Image
        src="/image-not-found.svg"
        alt="page not found"
        width={250}
        height={250}
      />
      <span className="text-2xl">Ooops...</span>
      <Link
        href="/"
        className="bg-black drop-shadow rounded-sm px-2 py-1 text-white"
      >
        Back
      </Link>
    </div>
  );
}
