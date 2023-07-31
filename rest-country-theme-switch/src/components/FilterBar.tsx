'use client';

import React, { useState } from 'react';

const regions = [
  'Filter by Region',
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type Region = (typeof regions)[number];

const FilterBar = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);

  const selectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value as Region);
  };

  return (
    <select
      value={selectedRegion}
      onChange={selectRegion}
      className='w-1/2 lg:w-1/4 p-4 focus:outline-none text-l-text dark:text-d-text bg-l-element dark:bg-d-element shadow-md'
    >
      {regions.map((region, key) => (
        <option key={key} value={region} selected={region === selectedRegion}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default FilterBar;
