import React from "react";
import Link from "next/link";
import { Post } from "@/types/blog";

interface Props {
  posts: Post[];
}

function PostList({ posts }: Props) {
  if (posts.length < 1) {
    return <p className="my-8 font-sans">there are no post!</p>;
  }

  return (
    <ul className="my-8 w-full">
      {posts.map((post) => (
        <li
          className="py-4 border-b-2 border-gray-200 flex flex-col gap-2"
          key={post.post_id}
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
  );
}

export default PostList;
