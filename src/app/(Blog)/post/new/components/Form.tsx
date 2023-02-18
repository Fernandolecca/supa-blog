"use client";
import React from "react";
import Button from "@/shared/Button";
import { FormProps } from "@/types/form";

function Form({
  formActions: { register, handleSubmit, formState },
  fields,
  onSubmit,
  isLoading,
  children,
}: FormProps) {
  const { isValid } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            className={`${
              field.type !== "checkbox"
                ? "block mr-2 mb-2"
                : "mr-2 mb-2 font-sans text-md capitalize text-slate-700"
            }`}
            htmlFor={field.name}
          >
            {field.name}
          </label>
          {field.type === "textarea" ? (
            <textarea
              className={`w-full border-gray-400 rounded-md  focus:border-none focus:ring-primary focus:ring-2`}
              id={field.name}
              rows={10}
              placeholder="Write down your next big story..."
              {...register(field.name)}
            />
          ) : (
            <input
              className={`${
                field.type !== "checkbox"
                  ? "block w-full border-gray-400 rounded-md  focus:border-none focus:ring-primary focus:ring-2"
                  : "rounded-none text-primary focus:ring-1 focus:ring-offset-1 focus:ring-primary"
              }`}
              type={field.type}
              id={field.name}
              placeholder="The most amazing adventure"
              {...register(field.name)}
            />
          )}
        </div>
      ))}

      <Button
        type="submit"
        color="primary"
        disabled={!isValid}
        withLoader={isLoading}
      >
        {children}
      </Button>
    </form>
  );
}

export default Form;
