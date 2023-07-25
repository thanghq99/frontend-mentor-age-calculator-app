'use client';

import PageTitle from '@/components/PageTitle';
import React, { useState } from 'react';
import { technology as initData } from '@/data/data.json';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

const technologies = initData.map((technology, key) => {
  return {
    id: key,
    ...technology,
  };
});

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);

  const matchDesktop = useMediaQuery('(min-width: 1024px)');

  const selectCurrentTechnology = (id: number) => {
    setCurrentTechnology(technologies[id]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 md:px-9 md:pt-10 bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] bg-cover bg-no-repeat bg-[#12131F] transition-all">
      <PageTitle title='SPACE LAUNCH 101' contentOrder={currentTechnology.id} />
      <div className='relative h-48 md:h-80 w-screen mt-8'>
        <Image
          alt='technology-img'
          fill
          src={
            matchDesktop
              ? currentTechnology.images.portrait
              : currentTechnology.images.landscape
          }
          className=''
        />
      </div>
      <div className='mt-8 md:mt-16 w-full flex flex-row justify-center space-x-4'>
        {technologies.map((technology, key) => (
          <div
            key={key}
            className={`flex items-center justify-center h-10 w-10 md:h-[60px] md:w-[60px] rounded-full border border-white/50 ${
              technology.id === currentTechnology.id
                ? 'bg-white text-c-black'
                : 'bg-c-black bg-opacity-25 text-white'
            }`}
            onClick={() => selectCurrentTechnology(technology.id)}
          >
            <p className='font-bellefair '>{technology.id + 1}</p>
          </div>
        ))}
      </div>
      <div className='mt-8 md:mt-16 text-center'>
        <p className='font-barlow-condensed text-sm md:text-base text-c-blue tracking-[2.36px] md:tracking-[2.7px]'>
          THE TERMINOLOGY…
        </p>
        <p className='mt-2 text-2xl font-bellefair uppercase md:text-[40px]'>
          {currentTechnology.name}
        </p>
      </div>
      <p className='max-w-md md:max-w-xl mt-4 text-[15px] md:text-base text-c-blue font-barlow leading-[25px] md:leading-7 text-center'>
        {currentTechnology.description}
      </p>
    </div>
  );
};

export default Technology;
