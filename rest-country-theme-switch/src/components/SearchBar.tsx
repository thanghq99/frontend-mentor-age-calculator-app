import React from 'react';

const SearchBar = () => {
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
        className='bg-l-element dark:bg-d-element focus:outline-none'
      />
    </div>
  );
};

export default SearchBar;
