import React from "react";
import Link from "next/link";

function SignUp() {
  return (
    <form>
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          autoComplete="off"
          className="w-full border-gray-400 rounded-md  focus:border-none focus:ring-primary focus:ring-2 peer placeholder-transparent"
        />
        <label
          htmlFor="name"
          className="
                  block mb-1 text-sm text-gray-700 absolute -top-2/3 left-1 
                  peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:left-3
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:text-gray-500
                  peer-placeholder-shown:text-base
                  transition-all 
                "
        >
          Full name
        </label>
      </div>

      <div className="relative mt-8">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
          autoComplete="off"
          className="w-full border-gray-400 rounded-md  focus:border-none focus:ring-primary focus:ring-2 peer placeholder-transparent"
        />
        <label
          htmlFor="email"
          className="
                  block mb-1 text-sm text-gray-700 absolute -top-2/3 left-1 
                  peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:left-3
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:text-gray-500
                  peer-placeholder-shown:text-base
                  transition-all 
                "
        >
          Email address
        </label>
      </div>

      <div className="mt-8 relative">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          className="w-full border-gray-400 rounded-md focus:border-none focus:ring-primary focus:ring-2 peer placeholder-transparent"
        />
        <label
          htmlFor="password"
          className="block mb-1 text-sm text-gray-700 absolute -top-2/3 left-1 
                peer-placeholder-shown:top-1/2 
                peer-placeholder-shown:left-3
                peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:text-gray-500
                peer-placeholder-shown:text-base
                transition-all "
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover text-white px-4 py-2 font-sans w-full rounded-sm mt-8 focus:outline-none"
      >
        Sign Up
      </button>

      <p className="text-gray-700 text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="hover:underline hover:cursor-pointer">
          Log In.
        </Link>
      </p>
    </form>
  );
}

export default SignUp;
