import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { ComponentProps } from '@/types/routeType';
import { FC } from 'react';

const Home: FC<ComponentProps> = () => {
  return (
    <div className='flex flex-col space-y-8 my-6 px-4'>
      <SearchBar />
      <FilterBar />
      <div>home</div>
    </div>
  );
};

export default Home;
