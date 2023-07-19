'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from '@/components/Form';
import { CountValue, FormDataType } from '@/types/formTypes';
import { FC, useState } from 'react';
import Divider from '@/components/Divider';
import Result from '@/components/Result';
import dayjs from 'dayjs';

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
      .required()
      .nullable()
      .default(null),
    year: yup
      .number()
      .min(1900, 'Someone lives that long?')
      .max(new Date().getFullYear(), 'Must be in the past')
      .required()
      .nullable()
      .default(null),
  })
  .required();

const Home: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [dayCount, setDayCount] = useState<CountValue>('--');
  const [monthCount, setMonthCount] = useState<CountValue>('--');
  const [yearCount, setYearCount] = useState<CountValue>('--');

  const form = useForm<FormDataType>({
    mode: 'onChange',
    defaultValues: {
      day: null,
      month: null,
      year: null,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormDataType) => {
    if (data.day === null || data.month === null || data.year === null) return;

    const jsSubmitDate = new Date(data.year, data.month - 1, data.day);
    const submitDate = dayjs(jsSubmitDate);

    const today = dayjs();

    if (submitDate.isAfter(today)) {
      setErrorMessage('This is not supported for people from the future');
      return;
    } else {
      setErrorMessage('');
    }

    let yearDiff = today.diff(submitDate, 'year');
    let monthDiff = today.diff(submitDate, 'month') - yearDiff * 12;
    let dayDiff: CountValue = submitDate.date() - today.date();
    if (submitDate.date() > today.date()) {
      dayDiff =
        today.date() +
        submitDate.subtract(1, 'month').daysInMonth() -
        submitDate.date();
    }

    setYearCount(yearDiff);
    setMonthCount(monthDiff);
    setDayCount(dayDiff);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-600">
      <form
        className="bg-white w-375 px-4 py-10 rounded-3xl rounded-br-[100px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form form={form} errorMessage={errorMessage} />
        <Divider form={form} />
        <Result
          dayCount={dayCount}
          monthCount={monthCount}
          yearCount={yearCount}
        />
      </form>
    </main>
  );
};

export default Home;
