import comments from '../../../contents/comments.json';
import { Comment } from './Comment';

export const WrapperComments = () => {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-bold border-b-2 border-zinc-400 pb-2.5">
        Comments
      </h2>
      <div className="divide-y-2 divide-zinc-400 space-y-6 max-h-[380px] overflow-y-auto">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </section>
  );
};
