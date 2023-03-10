"use client";
import React, { useState } from "react";

import Form from "../components/Form";
import FormValidator from "@/shared/FormValidator";
import Toast from "@/shared/Toast";
import { newPostShema as schema } from "@/schema/form";
import { SubmitHandler } from "react-hook-form";
import { newPostInputs } from "@/schema/form";
import { BiErrorCircle, BiCheck } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { createPost } from "../services/Api";

function NewPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<newPostInputs> = async ({
    content,
    is_published,
    title,
  }) => {
    setIsLoading(true);

    const { data, error } = await createPost({ content, title, is_published });

    setIsLoading(false);

    error
      ? setErrorMsg("Sorry. We cannot save your post")
      : setSuccessMsg("Post saved succesfully");

    router.push(`/post/${data!.post_id}`);
  };

  return (
    <div className="w-1/2  mx-auto flex justify-center items-center h-screen px-10">
      <div className="w-full">
        <FormValidator
          defaultValues={{
            is_published: false,
            title: "",
            content: "",
          }}
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
              Save
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

export default NewPost;
