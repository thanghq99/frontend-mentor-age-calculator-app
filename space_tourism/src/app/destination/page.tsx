'use client';

import React, { useState } from 'react';
import { destinations as initData } from '@/data/data.json';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';

const destinations = initData.map((destination, key) => {
  return { id: key, ...destination };
});

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const selectDestination = (id: number) => {
    setCurrentDestination(destinations[id]);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 bg-[url('/assets/destination/background-destination-mobile.jpg')] transition-all`}
    >
      <PageTitle
        title='Pick your
        destination'
        contentOrder={currentDestination.id}
      />
      <Image
        alt='destination-image'
        src={currentDestination.images.webp}
        height={259}
        width={259}
        className='p-8'
      />
      <div className='flex space-x-6'>
        {destinations.map((destination, key) => (
          <p
            key={key}
            className={`uppercase text-sm tracking-[2.36px] font-barlow-condensed pb-2 transition-all duration-200 delay-75 ${
              destination.id === currentDestination.id
                ? 'border-b-[3px]'
                : 'border-b-[3px] border-transparent text-c-blue'
            }`}
            onClick={() => selectDestination(destination.id)}
          >
            {destination.name}
          </p>
        ))}
      </div>
      <p className='text-[56px] font-bellefair uppercase pt-5'>
        {currentDestination.name}
      </p>
      <p className='text-c-blue text-[15px] leading-[25px] text-center'>
        {currentDestination.description}
      </p>
      <div className='divide-y w-full my-8 border-b border-[#383B4B]'></div>
      <div className='mb-14'>
        <div className='text-center mb-8'>
          <p className='mb-3 text-sm font-barlow-condensed leading-[2.36px] text-c-blue'>
            AVG. DISTANCE
          </p>
          <p className='text-[28px] uppercase font-bellefair'>
            {currentDestination.distance}
          </p>
        </div>
        <div className='text-center mb-8'>
          <p className='mb-3 text-sm font-barlow-condensed leading-[2.36px] text-c-blue'>
            Est. travel time
          </p>
          <p className='text-[28px] uppercase font-bellefair'>
            {currentDestination.travel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
