import Image from 'next/image';

import { Rating } from '@components/Rating';

export type CommentProps = {
  avatar: string;
  username: string;
  clientInfo: {
    height: number;
    weight: number;
  };
  productInfo: {
    size: string;
    color: string;
  };
  rate: number;
  comment: string;
};

export const Comment = ({
  avatar,
  clientInfo,
  productInfo,
  username,
  comment,
  rate
}: CommentProps) => {
  return (
    <div className="pt-6 space-y-1">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="avatar user"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="font-bold">{username}</p>
      </div>
      <span className="block text-zinc-600">
        Client info: Height: {clientInfo.height}cm | Weight: {clientInfo.weight}
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
