import React from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      {children}

      <section className="bg-gray-700 relative p-10">
        <Image
          className="object-cover opacity-25 select-none"
          src="/images/login-picture.jpg"
          alt="Login form background"
          priority
          fill
        />

        <p className="text-white text-4xl font-sans font-bold absolute top-1/2 -translate-y-1/2 selection:text-primary-hover  selection:bg-gray-6x00">
          We redifine the way people make blogs and create community.
        </p>

        <span className="text-white">
          Picture from <b>Eugene Golovesov</b>
        </span>
      </section>
    </div>
  );
}

export default AuthLayout;
