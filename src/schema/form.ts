import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[\d]/, "Password must contain at least one number"),
});

export const signUpSchema = yup
  .object({
    name: yup
      .string()
      .required("Full name is required")
      .max(30, "Full name must be 30 characters or less"),
  })
  .concat(signInSchema);

export type Inputs = Record<string, any>;
export type signInInputs = yup.InferType<typeof signInSchema>;
export type signUpInputs = yup.InferType<typeof signUpSchema>;
