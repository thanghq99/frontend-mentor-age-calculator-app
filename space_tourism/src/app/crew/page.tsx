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
      className={`min-h-screen flex flex-col items-center px-6 md:px-9 md:pt-10 bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-cover bg-no-repeat bg-[#0B0D17] transition-all`}
    >
      <PageTitle title='Meet your crew' contentOrder={currentCrew.id} />

      <div className='md:flex-grow flex flex-col items-center md:flex-col-reverse'>
        <div className='relative h-80 w-screen mt-8 md:mt-0 md:flex-grow'>
          <Image
            alt='crew-img'
            src={currentCrew.images.webp}
            fill
            className='object-contain'
          />
        </div>
        <div className='divide-y w-full border-b border-[#383B4B] md:hidden'></div>
        <div className='flex space-x-4 my-8 md:my-10'>
          {crews.map((crew, key) => (
            <div
              key={key}
              onClick={() => selectCrew(crew.id)}
              className={`h-[10px] w-[10px]  rounded ${
                currentCrew.id === crew.id ? 'bg-white' : 'bg-c-blue/25'
              }`}
            ></div>
          ))}
        </div>
        <div className='flex flex-col items-center md:pt-[60px]'>
          <p className='text-sm md:text-2xl uppercase font-bellefair'>
            {currentCrew.role}
          </p>
          <p className='mt-2 text-2xl md:text-[40px] uppercase font-bellefair'>
            {currentCrew.name}
          </p>
          <p className='max-w-xs md:max-w-md mt-4 text-[15px] md:text-base leading-[25px] md:leading-7 text-center font-barlow'>
            {currentCrew.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
