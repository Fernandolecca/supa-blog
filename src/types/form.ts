import { HTMLInputTypeAttribute } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

export interface Field {
  name: string;
  type: HTMLInputTypeAttribute;
}

export interface FormProps {
  formActions: UseFormReturn;
  onSubmit: SubmitHandler<any>;
  fields: Field[];
  isLoading: boolean;
  children?: React.ReactNode;
}
