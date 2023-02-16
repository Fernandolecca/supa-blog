"use client";
import React, { useEffect } from "react";
import Loader from "@/shared/Loader";
import Button from "@/shared/Button";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

export interface Props {
  formActions: UseFormReturn;
  onSubmit: SubmitHandler<any>;
  fields: string[];
  isLoading: boolean;
  children?: React.ReactNode;
}

function Form({
  formActions: { register, handleSubmit, formState, reset },
  onSubmit,
  fields,
  isLoading,
  children,
}: Props) {
  const { errors, isValid, isSubmitSuccessful } = formState;

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div
          key={index}
          className={`relative py-3 ${errors[field] ? "mb-6" : "mb-3"}`}
        >
          <input
            type={field === "password" ? "password" : "text"}
            id={field}
            placeholder={field}
            autoComplete="off"
            className={`w-full border-gray-400 rounded-md  focus:border-none focus:ring-primary focus:ring-2 peer placeholder-transparent ${
              errors[field] && "focus:ring-error border-error"
            }`}
            {...register(field)}
          />
          <label
            htmlFor={field}
            className="
                block text-sm text-gray-700 absolute -top-3  left-1 align-baseline capitalize
                peer-placeholder-shown:top-1/2 
                peer-placeholder-shown:left-3
                peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:text-gray-500
                peer-placeholder-shown:text-base
                transition-all 
            "
          >
            {field}
          </label>

          {errors[field] && (
            <span className="text-sm absolute -bottom-2 left-0 text-error">
              {errors[field]?.message as string}
            </span>
          )}
        </div>
      ))}

      <Button
        type="submit"
        disabled={!isValid}
        color="primary"
        withLoader={isLoading}
        fullWidth={true}
        marginTop={8}
      >
        {children}
      </Button>
    </form>
  );
}

export default Form;
