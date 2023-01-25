import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/login.svg"
        alt="Login form background"
        width={500}
        height={500}
        priority
      />
      <button className="bg-primary hover:bg-primary-hover text-white px-2 font-sans">
        Log In
      </button>
      <p className="text-primary">Hello bro</p>
    </div>
  );
}
