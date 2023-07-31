import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { ComponentProps } from '@/types/routeType';
import { FC } from 'react';
import countries from '@/data/data.json';
import CountryCard from '@/components/CountryCard';

export type Country = (typeof countries)[number];

const Home: FC<ComponentProps> = ({ searchParams }) => {
  const filteredCountries = () => {
    let data = countries;
    let searchName =
      searchParams.searchName && typeof searchParams.searchName === 'string'
        ? searchParams.searchName
        : '';

    if (!!searchParams.region)
      data = data.filter((country) => country.region === searchParams.region);
    if (!!searchName)
      data = data.filter((country) =>
        country.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
          ? true
          : false
      );
    return data;
  };

  const renderCountryCards = () => {
    const countries = filteredCountries();
    if (!countries.length)
      return <p className='text-xl font-semibold'>No country found.</p>;
    return countries.map((country, key) => (
      <CountryCard country={country} key={key} />
    ));
  };

  return (
    <div className='flex-grow flex flex-col space-y-8 my-6 px-4'>
      <SearchBar />
      <FilterBar />
      {renderCountryCards()}
    </div>
  );
};

export default Home;
