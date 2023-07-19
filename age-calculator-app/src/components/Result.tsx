'use client';

import { CountValue, ResultComponentPropsType } from '@/types/formTypes';
import React, { FC, memo } from 'react';

interface TimeItemProps {
  value: CountValue;
  label: 'years' | 'months' | 'days';
}

const TimeItem: FC<TimeItemProps> = ({ value = '--', label }) => {
  return (
    <div className="font-[1000] text-5xl lg:text-[86px] italic ">
      <span className="text-[#854DFF]">{value}</span>{' '}
      <span className="">{label}</span>
    </div>
  );
};

const Result: FC<ResultComponentPropsType> = ({
  dayCount,
  monthCount,
  yearCount,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <TimeItem value={yearCount} label="years" />
      <TimeItem value={monthCount} label="months" />
      <TimeItem value={dayCount} label="days" />
    </div>
  );
};

const MemoizedResult = memo(Result);

export default MemoizedResult;
