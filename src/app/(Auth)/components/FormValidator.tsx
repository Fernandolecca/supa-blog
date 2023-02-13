"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ObjectSchema } from "yup";
import { Inputs } from "@/schema/form";
import { Props as FormProps } from "./Form";

interface Props {
  defaultValues: {
    [field: string]: any;
  };
  schema: ObjectSchema<Inputs>;
  renderForm: (
    data: Pick<FormProps, "formActions" | "fields">
  ) => React.ReactElement;
}

function FormValidator({ defaultValues, renderForm, schema }: Props) {
  const formActions = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const fields = Object.keys(defaultValues);

  return renderForm({ formActions, fields });
}

export default FormValidator;
