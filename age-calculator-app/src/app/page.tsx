'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from './components/Form';
import { FormDataType } from '@/types/formTypes';
import { FC } from 'react';

const schema = yup
  .object({
    date: yup.number().min(1).max(31).nullable().default(null),
    month: yup.number().min(1).max(12).nullable().default(null),
    year: yup
      .number()
      .min(1900)
      .max(new Date().getFullYear())
      .nullable()
      .default(null),
  })
  .required();

const Home: FC = () => {
  const form = useForm<FormDataType>({
    defaultValues: {
      date: null,
      month: null,
      year: null,
    },
    resolver: yupResolver(schema),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Form form={form} />
    </main>
  );
};

export default Home;
