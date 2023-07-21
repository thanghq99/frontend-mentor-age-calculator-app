import React, { FC } from 'react';
import FormHeader from './FormHeader';

const StepTwo: FC = () => {
  return (
    <>
      <FormHeader
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
    </>
  );
};

export default StepTwo;
