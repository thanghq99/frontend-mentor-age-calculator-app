'use client';

import PageTitle from '@/components/PageTitle';
import React, { useState } from 'react';
import { crew as initData } from '@/data/data.json';
import Image from 'next/image';

const crews = initData.map((crew, key) => {
  return {
    id: key,
    ...crew,
  };
});

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(crews[0]);

  const selectCrew = (id: number) => {
    setCurrentCrew(crews[id]);
  };

  return (
    <div
      className={`min-h-screen lg:h-screen flex flex-col items-center pb-8 md:pb-0 px-6 md:px-9 md:pt-10 lg:px-32 lg:pt-24 bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover bg-no-repeat bg-[#0B0D17] transition-all`}
    >
      <PageTitle title='Meet your crew' contentOrder={currentCrew.id} />

      <div className='md:flex-grow flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse lg:w-full'>
        <div className='relative h-80 w-screen lg:w-1/2 mt-8 md:mt-0 md:flex-grow lg:h-full'>
          <div className='relative w-full h-full'>
            <Image
              alt='crew-img'
              src={currentCrew.images.webp}
              fill
              className='object-contain'
            />
          </div>
        </div>
        <div className='divide-y w-full border-b border-[#383B4B] md:hidden'></div>
        <div className='flex flex-col items-center md:flex-col-reverse lg:w-1/2 lg:items-start'>
          <div className='flex space-x-4 my-8 md:my-10 lg:w-full'>
            {crews.map((crew, key) => (
              <div
                key={key}
                onClick={() => selectCrew(crew.id)}
                className={`h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full ${
                  currentCrew.id === crew.id ? 'bg-white' : 'bg-c-blue/25'
                }`}
              ></div>
            ))}
          </div>
          <div className='flex flex-col items-center md:pt-[60px] lg:items-start'>
            <p className='text-sm md:text-2xl lg:text-[32px] uppercase font-bellefair text-c-blue lg:pb-[15px]'>
              {currentCrew.role}
            </p>
            <p className='mt-2 text-2xl md:text-[40px] lg:text-[56px] uppercase font-bellefair'>
              {currentCrew.name}
            </p>
            <p className='max-w-xs md:max-w-md mt-4 text-[15px] lg:text-lg md:text-base leading-[25px] md:leading-7 lg:leading-8 text-center lg:text-left lg:pb-12 font-barlow text-c-blue'>
              {currentCrew.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
