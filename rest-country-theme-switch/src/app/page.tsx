import Header from '@/components/Header';
import { ComponentProps } from '@/types/routeType';
import { FC } from 'react';

const Home: FC<ComponentProps> = () => {
  return (
    <div className="flex flex-col">
      <Header />
    </div>
  );
};

export default Home;
