import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import FormHeader from './FormHeader';
import { useFormContext } from 'react-hook-form';
import { plans, addOns, Plan, AddOn } from '@/data/data';
import { FormProps, Step } from '@/app/page';

interface StepFourProps {
  setStep: Dispatch<SetStateAction<Step>>;
}

const StepFour: FC<StepFourProps> = ({ setStep }) => {
  const form = useFormContext<FormProps>();

  const [chosenPlan, setChosenPlan] = useState<Plan | null>(null);
  const [chosenAddOns, setChosenAddOns] = useState<AddOn[] | null>(null);

  useEffect(() => {
    const chosenPlan = plans.find((plan) => plan.id === form.getValues('plan'));
    const chosenAddOns = addOns.filter((addOn) =>
      form.getValues('addOns').includes(addOn.id)
    );

    if (chosenPlan) setChosenPlan(chosenPlan);
    setChosenAddOns(chosenAddOns);
  }, []);

  const displayPlanDuration = () => {
    return form.getValues('isYearlyBilling') === true ? 'Yearly' : 'Monthly';
  };

  const goToStepTwo = () => {
    setStep(1);
  };

  if (!chosenPlan || !chosenAddOns) return <p>Collecting info...</p>;

  return (
    <div>
      <FormHeader
        title='Finishing up'
        description='Double-check everything looks OK before confirming.'
      />
      <div>
        <div className='p-4 bg-magnolia rounded-lg'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm text-marine-blue capitalize'>{`${
                chosenPlan.name
              } (${displayPlanDuration()})`}</p>
              <button
                className='capitalize underline text-sm text-cool-gray'
                onClick={goToStepTwo}
              >
                change
              </button>
            </div>
            <p className='text-sm font-extrabold text-marine-blue'>
              $
              {form.getValues('isYearlyBilling')
                ? chosenPlan.yearlyPrice + '/yr'
                : chosenPlan.monthlyPrice + '/mo'}
            </p>
          </div>
          <div className='border-t my-2'></div>
          <div>
            {chosenAddOns.map((addOn, key) => (
              <div key={key} className='flex justify-between py-1'>
                <p className='text-sm capitalize text-cool-gray'>
                  {addOn.name}
                </p>
                <p className='text-sm text-marine-blue'>
                  +$
                  {form.getValues('isYearlyBilling')
                    ? addOn.yearlyPrice + '/yr'
                    : addOn.monthlyPrice + '/mo'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
