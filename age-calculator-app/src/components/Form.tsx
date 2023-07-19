'use client';

import { FormComponentPropsType } from '@/types/formTypes';
import React, { FC } from 'react';
import Input from './Input';

const Form: FC<FormComponentPropsType> = ({ form }) => {
  const {
    getValues,
    register,
    formState: { errors },
  } = form;

  return (
    <div className="flex space-x-4">
      {/* <button onClick={() => console.log(errors)}>show errors</button>
      <button onClick={() => console.log(getValues())}>show data</button> */}
      <Input fieldKey="day" register={register} error={errors['day']} />
      <Input fieldKey="month" register={register} error={errors['month']} />
      <Input fieldKey="year" register={register} error={errors['year']} />
    </div>
  );
};

export default Form;
