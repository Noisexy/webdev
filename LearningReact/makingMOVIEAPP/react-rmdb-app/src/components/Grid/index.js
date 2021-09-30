import "./gridstyle.css";
import React from "react";

export const Grid = ({ header, children }) => {
  return (
    <div className="max-w-screen-md m-auto px-5">
      <h1 className="text-xl md:text-4xl text-gray-500">{header}</h1>
      <div className="content">{children}</div>
    </div>
  );
};
