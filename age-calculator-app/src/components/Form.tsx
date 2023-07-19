'use client';

import { FormComponentPropsType } from '@/types/formTypes';
import React, { FC, memo } from 'react';
import Input from './Input';

const Form: FC<FormComponentPropsType> = ({ form, errorMessage }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <div className="flex space-x-4">
        <Input fieldKey="day" register={register} error={errors['day']} />
        <Input fieldKey="month" register={register} error={errors['month']} />
        <Input fieldKey="year" register={register} error={errors['year']} />
      </div>
      <p className="mt-2 self-stretch text-xs text-red-500">
        {!!errorMessage ? errorMessage : <span>&nbsp;&nbsp;</span>}
      </p>
    </div>
  );
};

export default Form;
