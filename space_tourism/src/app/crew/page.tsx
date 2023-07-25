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
      className={`min-h-screen flex flex-col items-center px-6 bg-[url('/assets/crew/background-crew-mobile.jpg')] transition-all`}
    >
      <PageTitle title='Meet your crew' contentOrder={currentCrew.id} />

      <div className='relative h-56 w-44 mt-8'>
        <Image
          alt='crew-img'
          src={currentCrew.images.webp}
          fill
          className='object-contain'
        />
      </div>
      <div className='divide-y w-full border-b border-[#383B4B]'></div>
      <div className='flex space-x-4 my-8'>
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
      <p className='text-sm uppercase font-bellefair'>{currentCrew.role}</p>
      <p className='mt-2 text-2xl uppercase font-bellefair'>
        {currentCrew.name}
      </p>
      <p className='mt-4 text-[15px] leading-[25px] text-center'>
        {currentCrew.bio}
      </p>
    </div>
  );
};

export default Crew;
