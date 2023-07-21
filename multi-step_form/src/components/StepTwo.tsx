import React, { FC, useState } from 'react';
import FormHeader from './FormHeader';
import { Plan, plans } from '@/data/data';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '@/app/page';

interface PlanCardProps {
  plan: Plan;
  isYearlyPlan?: boolean;
  selectPlan: (planId: number) => void;
  selectedPlan: number;
}

interface TwoSideBalanceSwitch {
  isLeft: boolean;
  switchFn: () => void;
}

const PlanCard: FC<PlanCardProps> = ({
  plan: { id, icon, name, monthlyPrice, yearlyPrice },
  isYearlyPlan,
  selectPlan,
  selectedPlan,
}) => {
  return (
    <div
      className={`flex space-x-3 p-3 border rounded-lg hover:cursor-pointer ${
        selectedPlan === id
          ? 'border-marine-blue bg-alabaster'
          : 'border-gray-300 hover:bg-alabaster'
      }`}
      onClick={() => selectPlan(id)}
    >
      <Image src={icon} height={36} width={36} alt={`plan-icon-${name}`} />
      <div>
        <p className='text-base capitalize'>{name}</p>
        <p className='text-sm text-cool-gray'>
          ${isYearlyPlan ? `${yearlyPrice}/yr` : `${monthlyPrice}/mo`}
        </p>
      </div>
    </div>
  );
};

const TwoSideBalanceSwitch: FC<TwoSideBalanceSwitch> = ({
  isLeft,
  switchFn,
}) => {
  return (
    <div
      className='relative w-10 h-5 self-center bg-marine-blue rounded-full transition-all hover:cursor-pointer'
      onClick={switchFn}
    >
      <div
        className={`absolute translate-y-1/2 bottom-1/2 p-[6px] bg-white rounded-full ${
          isLeft ? 'left-1' : 'right-1'
        }`}
      ></div>
    </div>
  );
};

const StepTwo: FC = () => {
  const form = useFormContext<FormProps>();

  const selectPlan = (planId: number) => {
    form.setValue('plan', planId, {
      shouldValidate: true,
    });
  };

  const getSelectedPlan = () => {
    return form.getValues('plan');
  };

  const switchPlanDuration = () => {
    const oldValue = form.getValues('isYearlyBilling');
    form.setValue('isYearlyBilling', !oldValue, {
      shouldValidate: true,
    });
  };

  return (
    <>
      <FormHeader
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      />
      <div className='flex flex-col space-y-4'>
        {plans.map((plan, key) => (
          <PlanCard
            plan={plan}
            key={key}
            selectPlan={selectPlan}
            selectedPlan={getSelectedPlan()}
            isYearlyPlan={form.getValues('isYearlyBilling')}
          />
        ))}
      </div>
      <div className='flex item-center justify-center space-x-4 py-3 mt-6 bg-alabaster'>
        <p
          className={`transition-all ${
            form.getValues('isYearlyBilling') === false
              ? 'text-marine-blue'
              : 'text-gray-400'
          }`}
        >
          Monthly
        </p>
        <TwoSideBalanceSwitch
          isLeft={form.getValues('isYearlyBilling') === false}
          switchFn={switchPlanDuration}
        />
        <p
          className={`transition-all ${
            form.getValues('isYearlyBilling') === true
              ? 'text-marine-blue'
              : 'text-gray-400'
          }`}
        >
          Yearly
        </p>
      </div>
    </>
  );
};

export default StepTwo;
