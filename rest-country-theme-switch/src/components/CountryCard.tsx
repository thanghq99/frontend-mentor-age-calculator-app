import { Country } from '@/app/page';
import Link from 'next/link';
import React, { FC } from 'react';

const CountryCard: FC<{ country: Country }> = ({ country }) => {
  return (
    <Link
      href={`/details/${country.alpha3Code}`}
      className='flex flex-col mx-8 bg-l-element dark:bg-d-element rounded-md shadow-md'
    >
      <img
        src={country.flag}
        alt={`${country.name}-flag`}
        className='w-full h-auto'
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
