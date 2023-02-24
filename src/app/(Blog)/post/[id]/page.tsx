"use client";
import React, { useEffect, useCallback, useState } from "react";
import supabase from "supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/shared/Button";
import { BsPencilSquare, BsTrash, BsArrowLeft } from "react-icons/bs";
import { Post } from "@/types/blog";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function PostInfo({ params }: Params) {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  const fetchPost = useCallback(async () => {
    const { data } = await supabase
      .from("posts")
      .select("title, content, is_published")
      .eq("post_id", params.id);

    if (data!.length > 0) {
      setPost(data![0]);
    }
  }, [params]);

  const handleDelete = async () => {
    await supabase.from("posts").delete().eq("post_id", params.id);

    router.push("/");
  };

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <div className="px-10 py-20">
      <div className="flex justify-between items-center">
        <Link className="text-lg font-sans" href="/">
          <BsArrowLeft
            className="inline-block mr-2 align-text-bottom"
            size="1.125em"
          />
          All posts
        </Link>
        <div className="flex gap-2">
          <Button
            type="button"
            color="error"
            icon={<BsTrash />}
            withLoader={false}
            onClick={handleDelete}
          >
            Delete
          </Button>

          <Button
            type="button"
            color="success"
            icon={<BsPencilSquare />}
            withLoader={false}
            onClick={() => router.push(`/post/edit/${params.id}`)}
          >
            Edit
          </Button>
        </div>
      </div>

      <h1 className="text-4xl font-bold my-8">{post?.title}</h1>

      <section className="h-80 border-y-gray-300 border-y mb-8 font-sans font-normal text-lg relative">
        <p className="absolute top-1/2 -translate-y-1/2">{post?.content}</p>
      </section>

      <div className="border-gray-300 border rounded-md flex justify-between px-1 py-1">
        <input
          type="text"
          placeholder="This is such a good post..."
          className="border-none flex-1 focus:ring-0"
        />
        <button className="border-gray-300 border px-4 py-2 rounded-md font-bold">
          Add comment
        </button>
      </div>
    </div>
  );
}

export default PostInfo;
