import React from 'react';
import ResultIcon from '@/public/assets/images/icon-thank-you.svg';
import Image from 'next/image';

const ResultStep = () => {
  return (
    <div className='py-12 flex flex-col items-center text-center'>
      <Image src={ResultIcon} height={50} width={50} alt='result-icon' />
      <p className='py-4 font-extrabold text-xl text-marine-blue'>Thank you!</p>
      <p className='text-cool-gray text-[15px] font-light'>
        Thanks for confirming your subscription!
      </p>
      <p className='text-cool-gray text-[15px] font-light'>
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ResultStep;
