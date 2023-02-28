"use client";
import supabase from "supabase";
import Button from "@/shared/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsPencilSquare } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineLogout } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    router.push("/sign-in");
  };

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("content, post_id, created_by");

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
          variant="fill"
          onClick={() => router.push("/post/new")}
        >
          New post
        </Button>
      </div>

      {posts.length < 1 && (
        <p className="mt-8 font-sans">There are no posts!</p>
      )}

      <ul className="my-8 w-full">
        {posts.map((post, index) => (
          <li
            className="py-4 border-b-2 border-gray-200 flex flex-col gap-2"
            key={index}
          >
            <span className="ml-auto px-2 rounded-full bg-gray-300 font-sans">
              By: {post.created_by}
            </span>
            <p className="text-lg whitespace-nowrap text-ellipsis overflow-hidden text-primary">
              <span className="text-slate-800">{post.content}</span>
            </p>
            <Link
              className="text-sm text-gray-600 hover:underline"
              href={`/post/${post.post_id}`}
            >
              Go to
            </Link>
          </li>
        ))}
      </ul>

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
