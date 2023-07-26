'use client';

import React, { FC, useState } from 'react';
import Logo from '@/public/assets/shared/logo.svg';
import HamburgerIcon from '@/public/assets/shared/icon-hamburger.svg';
import CloseIcon from '@/public/assets/shared/icon-close.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  path: '/' | '/destination' | '/crew' | '/technology';
}

interface NavItemProps {
  open: boolean;
  order: number;
  navItem: NavItem;
}

const navItems: NavItem[] = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'destination',
    path: '/destination',
  },
  {
    title: 'crew',
    path: '/crew',
  },
  {
    title: 'technology',
    path: '/technology',
  },
];

const NavItem: FC<NavItemProps> = ({ open, order, navItem }) => {
  const { title, path } = navItem;

  // whoever read this, if you know how to make nav link appear in order with delay, please comment here to help me
  // const delay = `delay-${(1 + order) * 100}`;

  return (
    <a
      href={path}
      className={`block mx-8 mb-8 tracking-[2.7px] font-barlow-condensed transition-all delay-200 ${
        open ? `opacity-100` : 'opacity-0'
      }`}
    >
      <p className='inline mr-3 font-bold'>
        {order < 9 ? `0${order + 1}` : order + 1}
      </p>
      <p className='inline uppercase '>{title}</p>
    </a>
  );
};

const Header = () => {
  const pathname = usePathname();

  console.log(pathname);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <div className='fixed top-0 lg:top-8 left-0 z-50 w-screen flex items-center justify-between p-6 md:p-0 bg-black/0 lg:justify-normal'>
      <Image
        alt='logo'
        src={Logo}
        width={40}
        height={40}
        className='rounded-full md:ml-9 lg:ml-14'
      />
      {open ? (
        <Image
          alt='hamburger'
          src={CloseIcon}
          width={24}
          height={21}
          onClick={toggleOpen}
          className='md:hidden'
        />
      ) : (
        <Image
          alt='hamburger'
          src={HamburgerIcon}
          width={24}
          height={21}
          onClick={toggleOpen}
          className='md:hidden'
        />
      )}
      <div
        className={`absolute top-0 -z-10 h-screen w-64 pt-[118px] backdrop-blur-2xl bg-white/[0.04] transition-all ${
          open ? 'opacity-100 right-0' : 'opacity-0 -right-64'
        }`}
      >
        {navItems.map((navItem, key) => (
          <NavItem key={key} open={open} order={key} navItem={navItem} />
        ))}
      </div>
      <div className='hidden lg:block flex-grow relative'>
        <div className='absolute left-10 w-full z-10 border border-b border-c-blue/25'></div>
      </div>
      <div className='hidden md:flex items-center flex-row px-9 lg:px-20 h-24 bg-white/[0.04] backdrop-blur-[81.55px] tracking-[2.7px] font-barlow-condensed'>
        {navItems.map((navItem, key) => (
          <a
            key={key}
            href={navItem.path}
            className={`px-5 lg:px-8 self-stretch`}
          >
            <div
              className={`h-full flex flex-col justify-center uppercase border-b-[3px] text-c-blue ${
                pathname === navItem.path ? '' : 'border-transparent'
              }`}
            >
              <p>
                <span className='hidden lg:inline-block pr-3 font-bold text-base tracking-[2.7px]'>
                  {key < 9 ? `0${key + 1}` : key + 1}
                </span>
                {navItem.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
