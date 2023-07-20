'use client';

import { FC, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';

type Step = 0 | 1 | 2 | 3;

const steps: Step[] = [0, 1, 2, 3];

interface FormStepProps {
  step: Step;
  selectStep: (step: Step) => void;
}

const FormStep: FC<FormStepProps> = ({ step, selectStep }) => {
  return (
    <div
      className='relative p-4 border-2 rounded-full transition-all group hover:bg-light-blue hover:border-light-blue hover:cursor-pointer'
      onClick={() => selectStep(step)}
    >
      <p className='absolute text-white text-lg translate-x-1/2 right-1/2 translate-y-1/2 bottom-1/2 group-hover:text-marine-blue'>
        {step + 1}
      </p>
    </div>
  );
};

const Home: FC = () => {
  const [step, setStep] = useState<Step>(0);

  const switchStep = (step: Step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
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
      <div className='min-h-[600px] w-[375px] flex flex-col bg-magnolia'>
        <div className='h-44 w-full bg-form-step-selector bg-no-repeat'>
          <div className='flex justify-center space-x-2 mt-8'>
            {steps.map((val, key) => (
              <FormStep
                key={key}
                step={val}
                selectStep={(step: Step) => {
                  setStep(step);
                }}
              />
            ))}
          </div>
        </div>
        <div className='flex-grow flex flex-col justify-between -mt-[78px]'>
          <div className='min-h-[300px] mx-5 p-4 pt-8 bg-white rounded-xl shadow-lg'>
            {switchStep(step)}
          </div>
          <div className='flex flex-row-reverse items-center justify-between h-20 p-5 bg-white'>
            {step === 3 ? (
              <button className='min-w-[115px] px-4 py-3 bg-purplish-blue text-white capitalize rounded'>
                Confirm
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
              <button className=' text-cool-gray capitalize' onClick={lastStep}>
                go back
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
