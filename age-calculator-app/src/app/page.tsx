'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from '@/components/Form';
import { FormDataType } from '@/types/formTypes';
import { FC } from 'react';
import Divider from '@/components/Divider';
// import { Result } from 'postcss';

const schema = yup
  .object({
    day: yup
      .number()
      .min(1, 'Must be a valid day')
      .max(31, 'Must be a valid day')
      .nullable()
      .default(null),
    month: yup
      .number()
      .min(1, 'Must be a valid month')
      .max(12, 'Must be a valid month')
      .nullable()
      .default(null),
    year: yup
      .number()
      .min(1900, 'Someone lives that long?')
      .max(new Date().getFullYear(), 'Must be in the past')
      .nullable()
      .default(null),
  })
  .required();

const Home: FC = () => {
  const form = useForm<FormDataType>({
    mode: 'all',
    defaultValues: {
      day: null,
      month: null,
      year: null,
    },
    resolver: yupResolver(schema),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-600">
      <div className="bg-white w-375 px-4 py-8 rounded-3xl rounded-br-[100px]">
        <Form form={form} />
        <Divider />
        {/* <Result /> */}
      </div>
    </main>
  );
};

export default Home;
