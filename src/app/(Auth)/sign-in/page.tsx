"use client";

import React, { useState } from "react";
import supabase from "supabase";
import Link from "next/link";
import Form from "@/app/(Auth)/components/Form";
import FormValidator from "@/app/(Auth)/components/FormValidator";
import { signInSchema as schema, signInInputs } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

function SignIn() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<signInInputs> = async ({ email, password }) => {
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg("Succesfully Log in!");
      router.push("/");
    }
  };

  return (
    <>
      <FormValidator
        defaultValues={{
          email: "",
          password: "",
        }}
        schema={schema}
        renderForm={(data) => (
          <Form {...data} onSubmit={onSubmit} isLoading={isLoading}>
            Sign In
          </Form>
        )}
      />

      <p className="text-gray-700 text-center mt-4 text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="hover:underline hover:cursor-pointer">
          Sign Up.
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

export default SignIn;
