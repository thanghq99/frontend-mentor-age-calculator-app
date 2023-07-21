import React, { FC } from 'react';
import ResultIcon from '@/public/assets/images/icon-thank-you.svg';
import Image from 'next/image';

const ResultStep: FC = () => {
  return (
    <div className='h-full w-full relative'>
      <div className='lg:w-96 py-12 flex flex-col items-center text-center lg:h-full lg:justify-center lg:py-0 lg:absolute lg:translate-x-1/2 lg:right-1/2 lg:translate-y-1/2 lg:bottom-1/2 lg:p-0'>
        <Image
          src={ResultIcon}
          height={50}
          width={50}
          alt='result-icon'
          className='lg:hidden'
        />
        <Image
          src={ResultIcon}
          height={70}
          width={70}
          alt='result-icon'
          className='hidden lg:block'
        />
        <p className='py-4 break-words font-extrabold text-xl text-marine-blue lg:py-6 lg:text-2xl'>
          Thank you!
        </p>
        <p className='break-words text-cool-gray text-[15px] font-light lg:text-base'>
          Thanks for confirming your subscription!
        </p>
        <p className='break-words text-cool-gray text-[15px] font-light lg:text-base'>
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ResultStep;
