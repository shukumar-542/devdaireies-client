import React from "react";

const Loading = () => {
  return (
    <div className="h-[30vh] bg-transparent flex items-center justify-center">
      <div className="flex items-center justify-center">
        <span className="loading loading-bars bg-red-700 loading-xs"></span>
        <span className="loading loading-bars bg-red-400 loading-sm"></span>
        <span className="loading loading-bars bg-pink-500 loading-md"></span>
        <span className="loading loading-bars bg-pink-800 loading-lg"></span>
        <span className="loading loading-dots bg-pink-900 loading-lg"></span>
      </div>
    </div>
  );
};

export default Loading;
