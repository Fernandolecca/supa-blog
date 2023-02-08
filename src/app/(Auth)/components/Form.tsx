"use client";
import React from "react";
import {
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface Props {
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: SubmitHandler<any>;
  formState: FormState<any>;
  fields: string[];
  children?: React.ReactNode;
}

function Form({
  register,
  handleSubmit,
  onSubmit,
  formState,
  fields,
  children,
}: Props) {
  const { errors, isValid } = formState;

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
            htmlFor="name"
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

      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover text-white px-4 py-2 font-sans w-full rounded-sm mt-8 focus:outline-none disabled:bg-gray-300"
        disabled={!isValid}
      >
        {children}
      </button>
    </form>
  );
}

export default Form;
