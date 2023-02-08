"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ObjectSchema } from "yup";
import { Inputs } from "@/schema/form";
import { Props as FormProps } from "./Form";

interface Props {
  defaultValues: {
    [field: string]: any;
  };
  schema: ObjectSchema<Inputs>;
  renderForm: (data: FormProps) => React.ReactElement;
}

function FormValidator({ defaultValues, renderForm, schema }: Props) {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const fields = Object.keys(defaultValues);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table(data);
  };

  return renderForm({ register, handleSubmit, formState, fields, onSubmit });
}

export default FormValidator;
