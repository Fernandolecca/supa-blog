import React from "react";
import EditPostLayout from "./EditPostLayout";
import { fetchPost } from "../../services/Api";

async function EditPost({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return <EditPostLayout post={post} id={params.id} />;
}

export default EditPost;
