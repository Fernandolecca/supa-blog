import supabase from "supabase";
import PostList from "./components/PostList";
import PostListLayout from "./components/PostListLayout";

export const revalidate = 60;

export default async function Home() {
  const { data: posts } = await supabase
    .from("posts")
    .select("content, post_id, created_by");

  return (
    <PostListLayout>
      <PostList posts={posts ?? []} />
    </PostListLayout>
  );
}
