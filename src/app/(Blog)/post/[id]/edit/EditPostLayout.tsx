"use client";
import React, { useState } from "react";
import supabase from "supabase";
import Form from "../../components/Form";
import FormValidator from "@/shared/FormValidator";
import Toast from "@/shared/Toast";
import { newPostShema as schema } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";
import { newPostInputs } from "@/schema/form";
import { BiErrorCircle, BiCheck } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Post } from "@/types/blog";
import { updatePost } from "../../services/Api";

interface Props {
  post: Post;
  id: string;
}

function EditPostLayout({ post, id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<newPostInputs> = async ({
    title,
    content,
    is_published,
  }) => {
    setIsLoading(true);

    const post = await updatePost(id, { title, content, is_published });

    setIsLoading(false);

    post
      ? setSuccessMsg("Post data changed successfully")
      : setErrorMsg("An error ocurred. Please try again");

    router.push(`/post/${id}`);
  };

  return (
    <div className="w-1/2  mx-auto flex justify-center items-center h-screen px-10">
      <div className="w-full">
        <FormValidator
          defaultValues={post}
          schema={schema}
          renderForm={(data) => (
            <Form
              {...data}
              fields={[
                { name: "is_published", type: "checkbox" },
                { name: "title", type: "text" },
                { name: "content", type: "textarea" },
              ]}
              isLoading={isLoading}
              onSubmit={onSubmit}
            >
              Edit
            </Form>
          )}
        />

        {errorMsg && (
          <Toast
            message={errorMsg}
            status="error"
            icon={
              <BiErrorCircle className="inline-block align-bottom mr-1 fill-error w-5 h-5" />
            }
          />
        )}
        {successMsg && (
          <Toast
            message={successMsg}
            status="success"
            icon={
              <BiCheck className="inline-block align-text-bottom mr-1 fill-success w-5 h-5" />
            }
          />
        )}
      </div>
    </div>
  );
}

export default EditPostLayout;
