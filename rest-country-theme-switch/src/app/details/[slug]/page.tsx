import { ComponentProps } from '@/types/routeType';
import React, { FC } from 'react';
import { notFound } from 'next/navigation';
import countries from '@/data/data.json';
import Link from 'next/link';

const DetailPage: FC<ComponentProps> = ({ params: { slug } }) => {
  const country = countries.find((country) => country.alpha3Code === slug);

  const borderCountries = countries.filter((filterCountry) =>
    country?.borders?.includes(filterCountry.alpha3Code)
  );

  if (!country) notFound();

  return (
    <div className='flex-grow flex flex-col space-y-10 my-8 px-8 text-base'>
      <div className='self-start'>
        {/* not sure go back to main page or main page/last country */}
        <Link
          href='/'
          className='flex items-center px-6 py-1 bg-l-element dark:bg-d-element shadow-lg'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          Back
        </Link>
      </div>
      <img
        src={country.flag}
        alt={`${country.name}-flag`}
        className='w-full h-auto'
      />
      <div className='flex flex-col space-y-4'>
        <p className='font-extrabold text-xl'>{country.name}</p>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col space-y-1'>
            <p>
              <span className='font-semibold'>Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className='font-semibold'>Region: </span>
              {country.region}
            </p>
            <p>
              <span className='font-semibold'>Capital: </span>
              {country.capital}
            </p>
          </div>
          <div className='flex flex-col space-y-1'>
            <p>
              <span className='font-semibold'>Top level domain: </span>
              {country.topLevelDomain}
            </p>
            <p>
              <span className='font-semibold'>Currencies: </span>
              {country.currencies
                ? country.currencies.map((currency) => currency.code).join(', ')
                : 'No data'}
            </p>
            <p>
              <span className='font-semibold'>Languages: </span>
              {country.languages.map((language) => language.name).join(', ')}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className='font-bold text-lg'>Border country:</p>
        <div className='mt-2 flex flex-wrap gap-2'>
          {country.borders
            ? country.borders.map((border) => (
                <Link
                  href={`/details/${border}`}
                  className='px-4 py-2 bg-l-element dark:bg-d-element'
                >
                  {
                    borderCountries.find(
                      (boderCountry) => boderCountry.alpha3Code === border
                    )?.name
                  }
                </Link>
              ))
            : 'No border data'}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
