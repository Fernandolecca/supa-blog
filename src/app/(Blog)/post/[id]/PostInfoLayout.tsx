"use client";
import React from "react";
import supabase from "supabase";
import Link from "next/link";
import Button from "@/shared/Button";
import { useRouter } from "next/navigation";
import { BsPencilSquare, BsTrash, BsArrowLeft } from "react-icons/bs";

interface Props {
  children: React.ReactNode;
  id: string;
}

function PostInfolayout({ children, id }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    await supabase.from("posts").delete().eq("post_id", id);

    router.push("/");
  };

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
            variant="fill"
            icon={<BsTrash />}
            withLoader={false}
            onClick={handleDelete}
          >
            Delete
          </Button>

          <Button
            type="button"
            color="success"
            variant="fill"
            icon={<BsPencilSquare />}
            withLoader={false}
            onClick={() => router.push(`/post/${id}/edit`)}
          >
            Edit
          </Button>
        </div>
      </div>

      {children}

      <div className="border-gray-300 border rounded-md flex justify-between px-1 py-1">
        <input
          type="text"
          placeholder="This is such a good post..."
          className="border-none flex-1 focus:ring-0"
        />
        <Button color="transparent" variant="outline">
          Add comment
        </Button>
      </div>
    </div>
  );
}

export default PostInfolayout;
