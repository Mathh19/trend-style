'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      {open && (
        <form>
          <input
            type="search"
            placeholder="search"
            className="border w-full text-sm p-1 border-black focus-within:outline-black"
          />
        </form>
      )}
      <button
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={`${open && 'bg-black text-white p-1'}`}
      >
        <FiSearch />
      </button>
    </div>
  );
};
