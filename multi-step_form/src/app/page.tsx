'use client';

import { FC, useState } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormProps {
  name: string;
  email: string;
  phone: string;
  plan: number;
  isYearlyBilling: boolean;
  addOns: number[];
}

export type FormDataKeys = keyof FormProps;

export type Step = 0 | 1 | 2 | 3;

const steps: Step[] = [0, 1, 2, 3];

interface FormStepProps {
  step: Step;
  selectStep: (step: Step) => void;
  active: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .min(10, 'Phone length must be 10')
    .max(10, 'Phone length must be 10'),
  plan: yup.number().required('Plan is required'),
  isYearlyBilling: yup.boolean().required().default(false),
  addOns: yup.array().of(yup.number().required()).required().default([]),
});

const FormStep: FC<FormStepProps> = ({ step, selectStep, active }) => {
  return (
    <div
      className={`relative p-4 border-2 rounded-full transition-all group hover:cursor-pointer ${
        active
          ? 'bg-light-blue border-light-blue'
          : 'hover:bg-light-blue hover:border-light-blue'
      }`}
      onClick={() => selectStep(step)}
    >
      <p
        className={`absolute text-lg translate-x-1/2 right-1/2 translate-y-1/2 bottom-1/2 ${
          active
            ? 'text-marine-blue'
            : 'text-white group-hover:text-marine-blue'
        }`}
      >
        {step + 1}
      </p>
    </div>
  );
};

const Home: FC = () => {
  const [step, setStep] = useState<Step>(0);

  const form = useForm<FormProps>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: 0,
      isYearlyBilling: false,
      addOns: [],
    },
    resolver: yupResolver(schema),
  });

  const switchStep = (step: Step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour setStep={setStep} />;
    }
  };

  const nextStep = () => {
    setStep((step) => (step + 1) as Step);
  };

  const lastStep = () => {
    setStep((step) => (step - 1) as Step);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-light-gray'>
      <FormProvider {...form}>
        <div className='min-h-[600px] w-[375px] flex flex-col bg-magnolia'>
          <div className='h-44 w-full bg-form-step-selector bg-no-repeat'>
            <div className='flex justify-center space-x-4 mt-8'>
              {steps.map((val, key) => (
                <FormStep
                  key={key}
                  step={val}
                  active={val === step}
                  selectStep={(step: Step) => {
                    setStep(step);
                  }}
                />
              ))}
            </div>
          </div>
          <div className='flex-grow flex flex-col justify-between space-y-8 -mt-[78px]'>
            <div className='mx-5 px-6 py-8 bg-white rounded-xl shadow-lg'>
              {switchStep(step)}
            </div>
            <div className='flex flex-row-reverse items-center justify-between h-20 p-5 bg-white'>
              {step === 3 ? (
                <button className='min-w-[115px] px-4 py-3 bg-purplish-blue text-white capitalize rounded'>
                  confirm
                </button>
              ) : (
                <button
                  className='min-w-[115px] px-4 py-3 bg-marine-blue text-white capitalize rounded'
                  onClick={nextStep}
                >
                  next step
                </button>
              )}
              {step > 0 && (
                <button
                  className=' text-cool-gray capitalize'
                  onClick={lastStep}
                >
                  go back
                </button>
              )}
            </div>
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default Home;
