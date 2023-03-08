import React from "react";
import supabase from "supabase";
import Comment from "./Comment";
import PostInfolayout from "./PostInfoLayout";
import { fetchPost, fetchComments } from "../services/Api";

export const revalidate = 60;

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("posts").select("post_id");

  if (!posts) return [];

  return posts.map(({ post_id }) => ({
    id: post_id.toFixed(),
  }));
}

async function PostInfo({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);
  const comments = await fetchComments(params.id);

  return (
    <PostInfolayout id={params.id}>
      <React.Fragment>
        <h1 className="text-4xl font-bold my-8">{post.title}</h1>

        <section className="h-80 border-y-gray-300 border-y mb-8 font-sans font-normal text-lg relative">
          <p className="absolute top-1/2 -translate-y-1/2">{post.content}</p>
        </section>

        {comments.length > 0 && (
          <ul className="mb-8">
            {comments.map((comment) => (
              <Comment
                key={comment.comment_id}
                id={comment.comment_id}
                content={comment.content}
              />
            ))}
          </ul>
        )}
      </React.Fragment>
    </PostInfolayout>
  );
}

export default PostInfo;
