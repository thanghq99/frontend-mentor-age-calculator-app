'use client';

import { FC, useState } from 'react';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ResultStep from '@/components/ResultStep';

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
  const stepName = () => {
    switch (step) {
      case 0:
        return 'your info';
      case 1:
        return 'select plan';
      case 2:
        return 'add-ons';
      case 3:
        return 'summary';
    }
  };
  return (
    <div className='lg:flex lg:space-x-4 lg:px-8'>
      <div
        className={`relative h-10 w-10 border-2 rounded-full transition-all group hover:cursor-pointer ${
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
      <div className='hidden lg:block text-white'>
        <p
          style={{
            fontWeight: 200,
          }}
        >
          Step {step + 1}
        </p>
        <p className='font-[1000] uppercase tracking-widest text-[14px] leading-3'>
          {stepName()}
        </p>
      </div>
    </div>
  );
};

const Home: FC = () => {
  const [step, setStep] = useState<Step>(0);
  const [isConfirm, setIsConfirm] = useState(false);

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
        return isConfirm ? <ResultStep /> : <StepFour setStep={setStep} />;
    }
  };

  const nextStep = () => {
    form.trigger();
    if (form.formState.isValid) setStep((step) => (step + 1) as Step);
  };

  const lastStep = () => {
    setStep((step) => (step - 1) as Step);
  };

  const selectStep = (step: Step) => {
    if (!isConfirm) {
      form.trigger();
      if (form.formState.isValid) setStep(step);
    }
  };

  const confirmForm = () => {
    // i should collect the form's data and send to api in real application then get the computed data to display the result
    setIsConfirm(true);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-light-gray'>
      <FormProvider {...form}>
        <div className='min-h-[600px] w-[375px] lg:w-[960px] lg:p-4 flex flex-col lg:flex-row bg-magnolia lg:bg-white lg:rounded-xl'>
          <div className='h-44 lg:h-[568px] w-full lg:w-[274px] bg-form-step-selector lg:bg-form-step-selector-desktop bg-no-repeat'>
            <div className='flex lg:flex-col justify-center space-x-4 lg:space-x-0 lg:space-y-4 mt-8 '>
              {steps.map((val, key) => (
                <FormStep
                  key={key}
                  step={val}
                  active={val === step}
                  selectStep={selectStep}
                />
              ))}
            </div>
          </div>
          <div className='flex-grow flex flex-col justify-between space-y-8 lg:space-y-0 -mt-[78px] lg:mt-0 lg:px-16'>
            <div className='h-full mx-5 lg:mx-0 px-6 py-8 bg-white rounded-xl shadow-lg lg:shadow-none'>
              {switchStep(step)}
            </div>
            {!isConfirm && (
              <div className='flex flex-row-reverse items-center justify-between h-20 p-5 bg-white'>
                {step === 3 ? (
                  <button
                    className='min-w-[115px] px-4 py-3 bg-purplish-blue text-white capitalize rounded lg:rounded-lg hover:bg-indigo-500'
                    onClick={confirmForm}
                  >
                    confirm
                  </button>
                ) : (
                  <button
                    className='min-w-[115px] px-4 py-3 bg-marine-blue text-white capitalize rounded lg:rounded-lg hover:bg-blue-800'
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
            )}
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default Home;
