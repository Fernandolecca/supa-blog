"use client";
import React, { useState } from "react";
import supabase from "supabase";
import Link from "next/link";
import Toast from "@/shared/Toast";
import FormValidator from "@/shared/FormValidator";
import Form from "@/app/(Auth)/components/Form";
import { signUpSchema as schema, signUpInputs } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";
import { BiErrorCircle, BiCheck } from "react-icons/bi";

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
        `Thank you ${name}. A confirmation email was send to "${email}"`
      );
    }
  };

  return (
    <>
      <FormValidator
        defaultValues={{ name: "", email: "", password: "" }}
        schema={schema}
        renderForm={(data) => (
          <Form
            {...data}
            onSubmit={onSubmit}
            isLoading={isLoading}
            fields={[
              { name: "name", type: "text" },
              { name: "email", type: "text" },
              { name: "password", type: "password" },
            ]}
          >
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

export default SignUp;
