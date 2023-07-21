'use client';

import React, { FC, HTMLInputTypeAttribute, memo } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormDataKeys, FormProps } from '../app/page';

export interface InputPropsType {
  fieldKey: FormDataKeys;
  placeholder?: string;
  register: UseFormRegister<FormProps>;
  error: FieldError | undefined;
  type?: HTMLInputTypeAttribute;
}

const TextInput: FC<InputPropsType> = ({
  register,
  fieldKey,
  placeholder,
  error,
  type,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex justify-between text-xs lg:text-sm'>
        <p
          className={`capitalize ${
            !!error?.message ? 'text-red-500' : 'text-marine-blue'
          }`}
        >
          {fieldKey}
        </p>
        <p className='capitalize text-red-500'>{error?.message}</p>
      </div>

      <input
        {...register(fieldKey, {})}
        placeholder={placeholder}
        type={type}
        className={`w-full py-2 lg:py-3 px-3 lg:px-4 focus:outline-none focus:border-marine-blue border rounded  ${
          !!error?.message ? 'border-red-500' : 'border-gray-300'
        }`}
      />
    </div>
  );
};

export default TextInput;
