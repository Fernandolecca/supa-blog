"use client";
import React from "react";
import Link from "next/link";
import FormValidator from "@/app/(Auth)/components/FormValidator";
import Form from "@/app/(Auth)/components/Form";
import { signUpSchema as schema } from "@/schema/form";

function SignUp() {
  return (
    <>
      <FormValidator
        defaultValues={{ name: "", email: "", password: "" }}
        schema={schema}
        renderForm={(data) => <Form {...data}>Sign up</Form>}
      />

      <p className="text-gray-700 text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="hover:underline hover:cursor-pointer">
          Log In.
        </Link>
      </p>
    </>
  );
}

export default SignUp;
