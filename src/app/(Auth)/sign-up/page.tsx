"use client";
import React, { useState } from "react";
import supabase from "supabase";
import Link from "next/link";
import FormValidator from "@/app/(Auth)/components/FormValidator";
import Form from "@/app/(Auth)/components/Form";
import { signUpSchema as schema, signUpInputs } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";

function SignUp() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<signUpInputs> = async ({
    email,
    password,
    name,
  }) => {
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    setIsLoading(false);

    if (data.user?.identities?.length! < 1) {
      setErrorMsg("Already sign up. Please Log in instead");
    } else {
      setSuccessMsg(
        `Thank you ${name}. A confirmation email have been sent to "${email}"`
      );
    }
  };

  return (
    <>
      <FormValidator
        defaultValues={{ name: "", email: "", password: "" }}
        schema={schema}
        renderForm={(data) => (
          <Form {...data} onSubmit={onSubmit} isLoading={isLoading}>
            Sign up
          </Form>
        )}
      />

      <p className="text-gray-700 text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="hover:underline hover:cursor-pointer">
          Log In.
        </Link>
      </p>

      {errorMsg && (
        <span className="text-error text-md font-sans fixed top-4 right-4 bg-white rounded-sm border-gray-400 z-10 py-2 px-4 select-none shadow-md shadow-gray-700">
          {errorMsg}
        </span>
      )}
      {successMsg && (
        <span className="text-success text-md font-sans fixed top-4 right-4 bg-white rounded-sm border-gray-400 z-10 py-2 px-4 select-none shadow-md shadow-gray-700">
          {successMsg}
        </span>
      )}
    </>
  );
}

export default SignUp;
