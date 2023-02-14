import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  message: string;
  icon: React.ReactNode;
  status: "error" | "warning" | "success";
}

function Toast({ message, icon, status }: Props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div
      className={`text-${status} ${
        show ? "block" : "hidden"
      } text-sm font-sans fixed top-4 right-4 bg-white rounded-sm border-gray-400 z-10 py-4 px-2 select-none shadow-md shadow-gray-700 w-60 min-w-max animate-fade-in whitespace-nowrap capitalize`}
    >
      {icon}
      <span className="mr-5">{message}</span>

      <IoMdClose
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleClose}
      />
    </div>
  );
}

export default Toast;
