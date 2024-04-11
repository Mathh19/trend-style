'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import { Button } from './UI/Button';

export const SearchProducts = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (search.trim().length === 0) return;

    router.push(`/search/${search}`);
  };

  return (
    <div className="flex justify-center mb-3">
      <form
        onSubmit={onSubmit}
        className="flex border border-black max-w-[280px] rounded-sm"
      >
        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="search..."
          className="w-full outline-none px-2 py-1"
        />

        <Button icon={<IoIosSearch />} className="rounded-none" />
      </form>
    </div>
  );
};
