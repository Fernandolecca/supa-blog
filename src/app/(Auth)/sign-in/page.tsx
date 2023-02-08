"use client";

import React from "react";
import Link from "next/link";
import Form from "@/app/(Auth)/components/Form";
import FormValidator from "@/app/(Auth)/components/FormValidator";
import { signInSchema as schema } from "@/schema/form";

function SignIn() {
  return (
    <>
      <FormValidator
        defaultValues={{
          email: "",
          password: "",
        }}
        schema={schema}
        renderForm={(data) => <Form {...data}>Sign In</Form>}
      />

      <p className="text-gray-700 text-center mt-4 text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="hover:underline hover:cursor-pointer">
          Sign Up.
        </Link>
      </p>
    </>
  );
}

export default SignIn;
