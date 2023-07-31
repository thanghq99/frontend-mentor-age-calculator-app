import React, { FC } from 'react';
import ThemeButton from './ThemeButton';

const Header: FC = () => {
  return (
    <div className='flex justify-between px-8 md:px-12 lg:px-24 py-8 text-sm lg:text-base shadow-md dark:bg-d-element'>
      <div className='text-base lg:text-xl font-extrabold'>
        Where in the world?
      </div>
      <ThemeButton />
    </div>
  );
};

export default Header;
