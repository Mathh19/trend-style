'use client';

import { useEffect, useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from 'react-icons/fi';

import { Button } from '@components/UI/Button';
import { comments } from '@data/comments';

import { Comment, CommentProps } from './Comment';
import { LoadingComments } from './LoadingComments';

export const WrapperComments = () => {
  const [commentsData, setCommentsData] = useState<CommentProps[]>([]);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(commentsData.length / 5);

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleFirstPage = () => {
    if (page === 1) return;
    setPage(1);
  };

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };
  const handleLastPage = () => {
    if (page === totalPage) return;
    setPage(totalPage);
  };

  useEffect(() => {
    setCommentsData(comments);
  }, []);

  if (commentsData.length === 0) return <LoadingComments />;

  return (
    <section className="space-y-2.5">
      <h2 className="text-4xl font-bold border-b-2 border-zinc-400 pb-2.5">
        Comments
      </h2>
      <div className="divide-y-2 divide-zinc-400 space-y-6 max-h-[380px] overflow-y-auto">
        {commentsData.slice((page - 1) * 5, page * 5).map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="flex-1 text-sm text-zinc-500">
          {commentsData.slice((page - 1) * 5, page * 5).length} of{' '}
          {commentsData.length} comments
        </span>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Button
              disabled={page === 1}
              onClick={handleFirstPage}
              className="p-1.5 border border-black bg-white text-black disabled:bg-zinc-100 disabled:border-black/30 disabled:text-black/30"
              icon={<FiChevronsLeft size={16} />}
            />
            <Button
              disabled={page === 1}
              onClick={handlePrevPage}
              className="p-1.5 border border-black bg-white text-black disabled:bg-zinc-100 disabled:border-black/30 disabled:text-black/30"
              icon={<FiChevronLeft size={16} />}
            />
            <Button
              disabled={page === totalPage}
              onClick={handleNextPage}
              className="p-1.5 border border-black bg-white text-black disabled:bg-zinc-100 disabled:border-black/30 disabled:text-black/30"
              icon={<FiChevronRight size={16} />}
            />
            <Button
              disabled={page === totalPage}
              onClick={handleLastPage}
              className="p-1.5 border border-black bg-white text-black disabled:bg-zinc-100 disabled:border-black/30 disabled:text-black/30"
              icon={<FiChevronsRight size={16} />}
            />
          </div>
          <span className="text-xs text-end">
            page {page} of {totalPage} pages
          </span>
        </div>
      </div>
    </section>
  );
};
