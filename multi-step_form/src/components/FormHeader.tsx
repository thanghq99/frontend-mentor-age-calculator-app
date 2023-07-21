import React, { FC } from 'react';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <>
      <p className='mb-2 text-marine-blue text-xl font-extrabold'>{title}</p>
      <p className='mb-4 w-4/5 text-cool-gray text-sm'>{description}</p>
    </>
  );
};

export default FormHeader;
