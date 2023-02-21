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

function EditPost({ params }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const fetchPost = async () => {
    const { data } = await supabase
      .from("posts")
      .select("title, content, isPublish")
      .eq("post_id", params.id);

    return data![0];
  };

  const onSubmit: SubmitHandler<newPostInputs> = async ({
    title,
    content,
    isPublish,
  }) => {
    setIsLoading(true);

    const { data } = await supabase
      .from("posts")
      .update({
        title,
        content,
        isPublish,
      })
      .eq("post_id", params.id)
      .select();

    setIsLoading(false);

    if (data!.length > 0) {
      setSuccessMsg("Post data changed successfully");
    } else {
      setErrorMsg("An error ocurred. Please try again");
    }

    router.push(`/post/${params.id}`);
  };

  return (
    <div className="w-1/2  mx-auto flex justify-center items-center h-screen px-10">
      <div className="w-full">
        <FormValidator
          defaultValues={fetchPost}
          schema={schema}
          renderForm={(data) => (
            <Form
              {...data}
              fields={[
                { name: "isPublish", type: "checkbox" },
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

export default EditPost;
