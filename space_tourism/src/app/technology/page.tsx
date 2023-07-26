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
    <div className="min-h-screen lg:h-screen flex flex-col items-center pb-8 lg:pb-0 px-6 md:px-9 md:pt-10 lg:px-32 lg:pt-24 overflow-hidden bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover bg-no-repeat bg-[#12131F] transition-all">
      <PageTitle title='SPACE LAUNCH 101' contentOrder={currentTechnology.id} />
      <div className='flex flex-col items-center lg:flex-grow lg:flex-row-reverse lg:justify-between lg:mt-8 lg:w-full'>
        <div className='relative h-48 md:h-80 w-screen mt-8 lg:w-2/6 lg:h-full lg:left-32'>
          <Image
            alt='technology-img'
            fill
            src={
              matchDesktop
                ? currentTechnology.images.portrait
                : currentTechnology.images.landscape
            }
            className='block w-full h-full object-cover lg:object-contain'
          />
        </div>
        <div className='flex flex-col items-center lg:flex-row lg:space-x-16 lg:w-4/6'>
          <div className='mt-8 md:mt-16 w-full flex flex-row justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-6 lg:w-auto'>
            {technologies.map((technology, key) => (
              <div
                key={key}
                className={`flex items-center justify-center h-10 w-10 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] rounded-full border border-white/50 ${
                  technology.id === currentTechnology.id
                    ? 'bg-white text-c-black'
                    : 'bg-c-black bg-opacity-25 text-white'
                }`}
                onClick={() => selectCurrentTechnology(technology.id)}
              >
                <p className='font-bellefair md:tracking-[1.5px] lg:tracking-[2px] lg:text-2xl lg:text-[32px]'>
                  {technology.id + 1}
                </p>
              </div>
            ))}
          </div>
          <div className='mt-8 md:mt-16 text-center lg:flex-grow lg:text-left'>
            <p className='font-barlow-condensed text-sm md:text-base text-c-blue tracking-[2.36px] md:tracking-[2.7px]'>
              THE TERMINOLOGY…
            </p>
            <p className='mt-2 md:mt-4 lg:mt-8 text-2xl font-bellefair uppercase md:text-[40px] lg:text-[56px] lg:leading-[50px]'>
              {currentTechnology.name}
            </p>
            <p className='max-w-md md:max-w-xl mt-4 lg:mt-12 px-6 text-[15px] md:text-base lg:text-[18px] text-c-blue font-barlow leading-[25px] md:leading-7 lg:leading-8 lg:px-0'>
              {currentTechnology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
