import React from "react";

function notFound() {
  return (
    <p className="text-slate-800 text-5xl font-sans font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="text-error">Error |</span> This post does not exist.
    </p>
  );
}

export default notFound;
