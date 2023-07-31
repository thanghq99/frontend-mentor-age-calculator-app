import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { ComponentProps } from '@/types/routeType';
import { FC } from 'react';
import countries from '@/data/data.json';
import CountryCard from '@/components/CountryCard';

export type Country = (typeof countries)[number];

const Home: FC<ComponentProps> = () => {
  return (
    <div className='flex flex-col space-y-8 my-6 px-4'>
      <SearchBar />
      <FilterBar />
      {countries.map((country, key) => (
        <CountryCard country={country} key={key} />
      ))}
    </div>
  );
};

export default Home;
