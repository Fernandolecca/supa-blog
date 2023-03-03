"use client";
import React from "react";
import supabase from "supabase";
import Button from "@/shared/Button";
import { useRouter } from "next/navigation";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

interface Props {
  children: React.ReactNode;
}

function PostListLayout({ children }: Props) {
  const router = useRouter();

  const onSignOut = async () => {
    await supabase.auth.signOut();

    router.push("/sign-in");
  };

  return (
    <div className="px-16 py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-800 font-bold font-sans text-5xl">Posts</h1>

        <Button
          type="button"
          color="success"
          icon={<BsPencilSquare />}
          variant="fill"
          onClick={() => router.push("/post/new")}
        >
          New post
        </Button>
      </div>

      {children}

      <Button
        color="transparent"
        variant="outline"
        icon={<MdOutlineLogout />}
        onClick={() => onSignOut()}
      >
        Log out
      </Button>
    </div>
  );
}

export default PostListLayout;
