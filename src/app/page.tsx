"use client";
import supabase from "supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    route.push("/sign-in");
  };

  return (
    <div>
      <h1 className="text-gray-700 font-bold font-sans text-2xl">Posts</h1>

      <button>Add</button>
      <button>Delete</button>

      <button onClick={() => onSignOut()}>Log out</button>
    </div>
  );
}
