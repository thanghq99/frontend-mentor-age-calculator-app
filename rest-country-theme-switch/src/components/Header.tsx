import React, { FC } from 'react';
import ThemeButton from './ThemeButton';

const Header: FC = () => {
  return (
    <div className="flex justify-between px-4 py-8 text-sm shadow-md">
      <div className="font-extrabold">Where in the world?</div>
      <ThemeButton />
    </div>
  );
};

export default Header;
