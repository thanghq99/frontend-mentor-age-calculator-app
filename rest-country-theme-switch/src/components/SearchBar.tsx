'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      const params = new URLSearchParams(searchParams.toString());
      params.set('searchName', name);

      router.replace('/?' + params.toString());
    }
  };

  return (
    <div className='flex flex-row items-center w-full py-4 bg-l-element dark:bg-d-element rounded-md shadow-md'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-4 h-4 mx-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={onChange}
        onKeyDown={onEnter}
        className='bg-l-element dark:bg-d-element focus:outline-none'
      />
    </div>
  );
};

export default SearchBar;
