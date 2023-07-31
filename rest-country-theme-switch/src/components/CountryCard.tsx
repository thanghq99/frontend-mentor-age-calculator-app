import { Country } from '@/app/page';
import Link from 'next/link';
import React, { FC } from 'react';

const CountryCard: FC<{ country: Country }> = ({ country }) => {
  return (
    <Link
      scroll={true}
      href={`/details/${country.alpha3Code}`}
      className='flex flex-col lg:flex-grow lg:shrink-0 lg:basis-[calc(25%-64px)] bg-l-element dark:bg-d-element rounded-md shadow-md '
    >
      {/* respect flag origin size and ratio */}
      <img
        src={country.flag}
        alt={`${country.name}-flag`}
        className='w-full h-auto lg:w-auto lg:h-1/2 object-center'
      />
      <div className='p-6'>
        <p className='font-extrabold text-lg mb-6'>{country.name}</p>
        <div className='flex flex-col space-y-1'>
          <p>
            <span className='font-bold'>Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className='font-bold'>Region: </span>
            {country.region}
          </p>
          <p>
            <span className='font-bold'>Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
