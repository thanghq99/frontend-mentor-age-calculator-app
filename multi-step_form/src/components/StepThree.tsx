import React, { FC } from 'react';
import FormHeader from './FormHeader';
import { AddOn, addOns } from '@/data/data';
import { useFormContext } from 'react-hook-form';
import { FormProps } from '@/app/page';

interface AddOnCardProps {
  addOn: AddOn;
  isYearlyBilling: boolean;
  isSelected: boolean;
  onClickAddOn: (addOnId: number) => void;
}

const AddOnCard: FC<AddOnCardProps> = ({
  addOn: { id, name, description, monthlyPrice, yearlyPrice },
  isYearlyBilling,
  isSelected,
  onClickAddOn,
}) => {
  return (
    <div
      className={`flex items-center space-x-3 p-3 border rounded-lg hover:cursor-pointer ${
        isSelected
          ? 'border-marine-blue bg-alabaster'
          : 'border-gray-300 hover:bg-alabaster'
      }`}
      onClick={() => onClickAddOn(id)}
    >
      <input
        type='checkbox'
        checked={isSelected}
        className='h-5 w-5 accent-purplish-blue'
        readOnly
        onClick={(e) => {
          e.stopPropagation();
          onClickAddOn(id);
        }}
      />
      <div>
        <p className='text-sm capitalize'>{name}</p>
        <p className='text-xs text-cool-gray'>{description}</p>
      </div>
      <p className='flex-grow text-end text-xs text-purplish-blue'>
        +${isYearlyBilling ? yearlyPrice + '/yr' : monthlyPrice + '/mo'}
      </p>
    </div>
  );
};

const StepThree: FC = () => {
  const form = useFormContext<FormProps>();

  const onClickAddOn = (addOnId: number) => {
    const currentAddOns = form.getValues('addOns');

    const selectedAddOnIndex = currentAddOns.findIndex(
      (addOn) => addOn === addOnId
    );

    if (selectedAddOnIndex !== -1) {
      currentAddOns.splice(selectedAddOnIndex, 1);
    } else {
      currentAddOns.push(addOnId);
    }

    form.setValue('addOns', currentAddOns, { shouldValidate: true });
  };

  const isSelected = (addOnId: number) => {
    const currentAddOns = form.getValues('addOns');

    return currentAddOns.some((addOn) => addOn === addOnId);
  };

  return (
    <div>
      <FormHeader
        title='Pick add-ons'
        description='Add-ons help enhance your gaming experience.'
      />
      <div className='flex flex-col space-y-4'>
        {addOns.map((addOn, key) => (
          <AddOnCard
            addOn={addOn}
            key={key}
            isYearlyBilling={form.getValues('isYearlyBilling')}
            onClickAddOn={onClickAddOn}
            isSelected={isSelected(addOn.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default StepThree;
