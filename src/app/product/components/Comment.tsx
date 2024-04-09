import Image from 'next/image';

import { Rating } from '@components/UI/Rating';

export type CommentProps = {
  id: string;
  avatar: string;
  username: string;
  height: number;
  weight: number;
  rate: number;
  comment: string;
  productInfo: {
    size: string;
    color: string;
  };
};

export const Comment = ({
  avatar,
  height,
  weight,
  productInfo,
  username,
  comment,
  rate
}: CommentProps) => {
  return (
    <div className="pt-6 space-y-1">
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt="avatar user"
          width={50}
          height={50}
          className="rounded-full border border-black"
        />
        <p className="font-bold">{username}</p>
      </div>
      <span className="block text-zinc-600">
        Client info: Height: {height}cm | Weight: {weight}
        Kg
      </span>
      <span className="block text-zinc-600">
        Product info: Size: {productInfo.size} | Color: {productInfo.color}
      </span>
      <Rating rate={rate} />
      <p>{comment}</p>
    </div>
  );
};
