import React, { FC } from 'react';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <>
      <p className='mb-2 text-marine-blue text-xl font-extrabold lg:text-3xl'>
        {title}
      </p>
      <p className='mb-4 w-4/5 text-cool-gray text-sm lg:text-base'>
        {description}
      </p>
    </>
  );
};

export default FormHeader;
