import {
  UseFormReturn,
  UseFormRegister,
  FieldError,
} from 'react-hook-form/dist/types';

export interface FormDataType {
  day: number | null;
  month: number | null;
  year: number | null;
}

export type FormDataKeys = keyof FormDataType;

export interface FormType extends UseFormReturn<FormDataType, any, undefined> {}

export interface FormComponentPropsType {
  form: FormType;
}

export interface InputPropsType<> {
  fieldKey: FormDataKeys;
  register: UseFormRegister<FormDataType>;
  error: FieldError | undefined;
}
