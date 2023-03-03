import { notFound } from "next/navigation";
import { Post } from "@/types/blog";
import supabase from "supabase";

export async function fetchPost(id: string) {
  const { data: post } = await supabase
    .from("posts")
    .select("title, content, is_published")
    .eq("post_id", id)
    .single();

  if (!post) {
    notFound();
  }

  return post;
}

export async function updatePost(id: string, post: Post) {
  const { data: updatedPost } = await supabase
    .from("posts")
    .update(post)
    .eq("post_id", id)
    .select()
    .single();

  return updatedPost;
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function createPost(post: Post) {
  const user = await getCurrentUser();

  const res = await supabase
    .from("posts")
    .insert([
      {
        ...post,
        user_id: user?.id,
        created_by: user?.user_metadata.name,
      },
    ])
    .select("post_id")
    .single();

  return res;
}
