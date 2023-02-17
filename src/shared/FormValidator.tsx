import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ObjectSchema } from "yup";
import { Inputs } from "@/schema/form";
import { FormProps } from "@/types/form";

interface Props {
  defaultValues: {
    [field: string]: any;
  };
  schema: ObjectSchema<Inputs>;
  renderForm: (data: Pick<FormProps, "formActions">) => React.ReactElement;
}

function FormValidator({ defaultValues, renderForm, schema }: Props) {
  const formActions = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return renderForm({ formActions });
}

export default FormValidator;
