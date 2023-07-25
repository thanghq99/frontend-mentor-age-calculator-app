'use client';

import PageTitle from '@/components/PageTitle';
import React, { useState } from 'react';
import { technology as initData } from '@/data/data.json';
import Image from 'next/image';

const technologies = initData.map((technology, key) => {
  return {
    id: key,
    ...technology,
  };
});

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);

  const selectCurrentTechnology = (id: number) => {
    setCurrentTechnology(technologies[id]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-[#12131F] transition-all">
      <PageTitle title='SPACE LAUNCH 101' contentOrder={currentTechnology.id} />
      <div className='relative h-40 w-screen mt-8'>
        <Image
          alt='technology-img'
          fill
          src={currentTechnology.images.landscape}
        />
      </div>
      <div className='mt-8 w-full flex flex-row justify-center space-x-4'>
        {technologies.map((technology, key) => (
          <div
            key={key}
            className={`flex items-center justify-center h-10 w-10 rounded-full border border-white/50 ${
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
      <div className='mt-8 text-center'>
        <p className='font-barlow-condensed text-sm text-c-blue tracking-[2.36px]'>
          THE TERMINOLOGY…
        </p>
        <p className='mt-2 text-2xl font-bellefair uppercase'>
          {currentTechnology.name}
        </p>
      </div>
      <p className='mt-4 text-[15px] text-c-blue font-barlow leading-[25px] text-center'>
        {currentTechnology.description}
      </p>
    </div>
  );
};

export default Technology;
