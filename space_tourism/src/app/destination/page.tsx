'use client';

import React, { useState } from 'react';
import { destinations as initData } from '@/data/data.json';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import { useMediaQuery } from '@mantine/hooks';

const destinations = initData.map((destination, key) => {
  return { id: key, ...destination };
});

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const matchTablet = useMediaQuery('(min-width: 768px)');
  const matchDesktop = useMediaQuery('(min-width: 1024px)');

  const selectDestination = (id: number) => {
    setCurrentDestination(destinations[id]);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 md:px-9 md:pt-10 bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-cover bg-no-repeat bg-[#0B0D17] transition-all`}
    >
      <PageTitle
        title='Pick your
        destination'
        contentOrder={currentDestination.id}
      />
      <div
        className={`relative ${
          matchDesktop
            ? 'w-[678px] h-[678px]'
            : matchTablet
            ? 'w-[457px] h-[457px]'
            : 'w-[259px] h-[259px]'
        }`}
      >
        <Image
          alt='destination-image'
          src={currentDestination.images.webp}
          fill
          className='p-8 md:p-20'
        />
      </div>

      <div className='flex space-x-6'>
        {destinations.map((destination, key) => (
          <p
            key={key}
            className={`uppercase text-sm tracking-[2.36px] md:tracking-[2.7px] md:text-base font-barlow-condensed pb-2 md:pb-3 transition-all duration-200 delay-75 ${
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
      <p className='text-[56px] md:text-[80px] font-bellefair uppercase pt-5 md:pt-8'>
        {currentDestination.name}
      </p>
      <p className='max-w-sm md:max-w-xl text-c-blue text-[15px] md:text-base leading-[25px] md:leading-7 text-center font-barlow'>
        {currentDestination.description}
      </p>
      <div className='divide-y w-full my-8 md:mt-[49px] md:mb-7 border-b border-[#383B4B]'></div>
      <div className='mb-14 md:flex md:space-x-32'>
        <div className='text-center mb-8'>
          <p className='mb-3 text-sm uppercase font-barlow-condensed leading-[2.36px] text-c-blue'>
            Avg. distance
          </p>
          <p className='text-[28px] uppercase font-bellefair'>
            {currentDestination.distance}
          </p>
        </div>
        <div className='text-center mb-8'>
          <p className='mb-3 text-sm uppercase font-barlow-condensed leading-[2.36px] text-c-blue'>
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
