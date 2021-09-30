import React from "react";
import "./thumbstyle.css";

export const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      <img
        src={image}
        alt="THUMBNAIL"
        className=" transition-all rounded-3xl hover:opacity-80"
      />
    </div>
  );
};
