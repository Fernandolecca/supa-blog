"use client";
import supabase from "supabase";
import Button from "@/shared/Button";
import { useRouter } from "next/navigation";
import { BsPencilSquare } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Home() {
  const route = useRouter();
  const [posts, setPosts] = useState<any[]>([]);

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    route.push("/sign-in");
  };

  const fetchPosts = async () => {
    const { data } = await supabase.from("posts").select("content");

    setPosts(data!);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="px-16 py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-800 font-bold font-sans text-5xl">Posts</h1>

        <Button
          type="button"
          color="success"
          icon={<BsPencilSquare />}
          onClick={fetchPosts}
        >
          New post
        </Button>
      </div>

      {posts.length < 1 && (
        <p className="mt-8 font-sans">There are no posts!</p>
      )}

      {posts.map((post, index) => (
        <p key={index}>{post.content}</p>
      ))}

      <button onClick={() => onSignOut()}>Log out</button>
    </div>
  );
}
