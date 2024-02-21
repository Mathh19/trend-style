import { Comment, CommentProps } from './Comment';

type WrapperComments = {
  comments: CommentProps[];
};

export const WrapperComments = ({ comments }: WrapperComments) => {
  return (
    <div className="divide-y-2 divide-zinc-400 space-y-6 max-h-[380px] overflow-y-auto">
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};
