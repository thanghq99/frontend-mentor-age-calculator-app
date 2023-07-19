'use client';

import { InputPropsType } from '@/types/formTypes';
import React, { FC, memo, useEffect, useState } from 'react';

const Input: FC<InputPropsType> = ({ register, fieldKey, error }) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    switch (fieldKey) {
      case 'day':
        setLabel('DD');
        break;
      case 'month':
        setLabel('MM');
        break;
      case 'year':
        setLabel('YYYY');
        break;
      default:
        break;
    }
  }, [fieldKey]);

  return (
    <div className="flex flex-col space-y-1">
      <p
        className={`uppercase text-xs tracking-[0.25em] font-extrabold ${
          !!error ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {fieldKey}
      </p>
      <input
        {...register(fieldKey, {
          setValueAs: (value) => {
            if (value === null) return null;
            if (value === '') {
              return null;
            }
            return Number(value);
          },
        })}
        type="number"
        placeholder={label}
        className={`w-[90px] lg:w-[140px] py-2 px-3 text-[24px] font-[1000] focus:outline-none focus:border-[#854DFF] border rounded-lg  ${
          !!error ? 'border-red-500' : 'border-gray-300'
        }`}
      />

      <p className="hidden lg:block text-xs text-red-500">
        {!!error ? error?.message : <span>&nbsp;&nbsp;</span>}
      </p>
    </div>
  );
};

const MemoizedInput = memo(Input);

export default MemoizedInput;
