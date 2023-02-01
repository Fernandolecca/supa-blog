import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      <section className="bg-white p-10 flex flex-wrap justify-center">
        <h1 className="font-sans text-primary font-bold text-2xl text-center w-full">
          <span className="text-gray-300 font-normal">We are</span> Supablog
        </h1>
        <div className="w-4/6">
          <h3 className="text-lg font-bold text-gray-700 text-center mb-2">
            Welcome Back!
          </h3>
          <p className="text-gray-700 text-sm mb-14 text-center">
            Sign in entering your credentials and start <b>posting.</b>
          </p>

          <form>
            <div className="relative">
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
              Log In
            </button>

            <p className="text-gray-700 text-center mt-4 text-sm">
              Don&apos;t have an account?{" "}
              <span className="hover:underline hover:cursor-pointer">
                Sign Up.
              </span>
            </p>
          </form>
        </div>
      </section>

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
