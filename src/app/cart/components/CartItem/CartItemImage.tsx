import Image from 'next/image';

type CartItemImageProps = {
  img: string;
  alt: string;
};

export const CartItemImage = ({ img, alt }: CartItemImageProps) => {
  return (
    <div className="relative w-40 h-40">
      <Image
        priority
        src={img}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        className="object-cover"
      />
    </div>
  );
};
