import React from "react";

function Loader() {
  return (
    <div
      className="
        w-6 h-6 
        rounded-full 
        bg-transparent 
        border-2 
        border-slate-200 
        border-y-transparent 
        mx-auto
        animate-spin
    "
    />
  );
}

export default Loader;
