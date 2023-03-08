"use client";
import React from "react";
import { deleteComment } from "../services/Api";
import { BiTrashAlt } from "react-icons/bi";

interface Props {
  content: string;
  id: string;
}

function Comment({ content, id }: Props) {
  const handleDelete = async () => {
    await deleteComment(id);
  };

  return (
    <li className="hover:bg-gray-100 p-3 flex justify-between items-center text-gray-500">
      <span>{content}</span>
      <BiTrashAlt
        cursor="pointer"
        size="1.2em"
        onClick={handleDelete}
        className="hover:bg-error-hover hover:text-white hover:h-[1.5em] hover:w-[1.5em]"
      />
    </li>
  );
}

export default Comment;
