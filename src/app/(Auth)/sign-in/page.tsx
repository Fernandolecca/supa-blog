"use client";

import React, { useState } from "react";
import supabase from "supabase";
import Link from "next/link";
import Toast from "@/shared/Toast";
import Form from "@/app/(Auth)/components/Form";
import FormValidator from "@/app/(Auth)/components/FormValidator";
import { signInSchema as schema, signInInputs } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { BiErrorCircle, BiCheck } from "react-icons/bi";

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
        <Toast
          message={errorMsg}
          status="error"
          icon={
            <BiErrorCircle className="inline-block align-bottom mr-1 fill-error w-5 h-5" />
          }
        />
      )}

      {successMsg && (
        <Toast
          message={successMsg}
          status="success"
          icon={
            <BiCheck className="inline-block align-text-bottom mr-1 fill-success w-5 h-5" />
          }
        />
      )}
    </>
  );
}

export default SignIn;
