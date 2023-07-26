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
      className={`min-h-screen flex flex-col items-center pb-8 px-6 md:px-9 md:pt-10 lg:px-32 lg:pt-24 bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-cover bg-no-repeat bg-[#0B0D17] transition-all`}
    >
      <PageTitle
        title='Pick your
        destination'
        contentOrder={currentDestination.id}
      />

      <div className='lg:w-full flex flex-col items-center lg:flex-row lg:mt-8'>
        <div
          className={`${
            matchDesktop
              ? 'w-3/4 h-[600px]'
              : matchTablet
              ? 'w-[457px] h-[457px]'
              : 'w-[259px] h-[259px]'
          }`}
        >
          <div className='relative w-full h-full'>
            <Image
              alt='destination-image'
              src={currentDestination.images.webp}
              fill
              className='p-8 md:p-20 object-contain'
            />
          </div>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='flex space-x-6 lg:space-x-9'>
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
          <p className='text-[56px] md:text-[80px] lg:text-[100px] font-bellefair uppercase pt-5 md:pt-8'>
            {currentDestination.name}
          </p>
          <p className='max-w-sm md:max-w-xl text-c-blue text-[15px] md:text-base leading-[25px] md:leading-7 text-center lg:text-left font-barlow'>
            {currentDestination.description}
          </p>
          <div className='divide-y w-full my-8 md:mt-[49px] md:mb-7 border-b border-[#383B4B]'></div>
          <div className='mb-14 md:flex md:space-x-32 text-center lg:text-left'>
            <div className='mb-8'>
              <p className='mb-3 text-sm uppercase font-barlow-condensed leading-[2.36px] text-c-blue'>
                Avg. distance
              </p>
              <p className='text-[28px] uppercase font-bellefair'>
                {currentDestination.distance}
              </p>
            </div>
            <div className='mb-8'>
              <p className='mb-3 text-sm uppercase font-barlow-condensed leading-[2.36px] text-c-blue'>
                Est. travel time
              </p>
              <p className='text-[28px] uppercase font-bellefair'>
                {currentDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
