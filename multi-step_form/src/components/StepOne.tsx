'use client';

import React, { FC } from 'react';
import FormHeader from './FormHeader';
import TextInput from './TextInput';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '../app/page';

const StepOne: FC = () => {
  const form = useFormContext<FormProps>();

  console.log('render step one');

  if (!form) return <p>Loading form...</p>;
  else {
    return (
      <div>
        <FormHeader
          title='Personal info'
          description='Please provide your name, email address and phone number.'
        />
        <div className='flex flex-col space-y-3'>
          <TextInput
            register={form.register}
            error={form.formState.errors.name}
            fieldKey='name'
            type='text'
            placeholder='e.g. Stephen King'
          />
          <TextInput
            register={form.register}
            error={form.formState.errors.email}
            fieldKey='email'
            type='email'
            placeholder='e.g. stephenking@lorem.com'
          />
          <TextInput
            register={form.register}
            error={form.formState.errors.phone}
            fieldKey='phone'
            type='number'
            placeholder='e.g. + 1 234 567 890'
          />
        </div>
      </div>
    );
  }
};

export default StepOne;
