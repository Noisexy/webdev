import React from "react";
import "./heroImage.css";

export const HeroImage = (props) => {
  const { image, title, text } = props;
  console.log(image);
  return (
    <div className="wrapperDiv ">
      <img className="image " src={image} alt="POSTER" />
      <div className="text p-5 max-w-7xl m-auto">
        <div className="z-50 max-w-screen-md absolute bottom-5 mr-5 text-white">
          <h1 className="text-3xl md:text-4xl">{title}</h1>
          <p className="text-base md:text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};
