import React from "react";

interface Props {
  children: React.ReactNode;
}

function SignUplayout({ children }: Props) {
  return (
    <section className="bg-white p-10 flex flex-wrap justify-center">
      <h1 className="font-sans text-primary font-bold text-2xl text-center w-full">
        <span className="text-gray-300 font-normal">We are</span> Supablog
      </h1>
      <div className="w-4/6">
        <h3 className="text-lg font-bold text-gray-700 text-center mb-2">
          Create an Account
        </h3>
        <p className="text-gray-700 text-sm mb-14 text-center">
          Please fill the fields to register into <b>supablog.</b>
        </p>

        {children}
      </div>
    </section>
  );
}

export default SignUplayout;
