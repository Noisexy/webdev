import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import "./headerstyle.css";

export const Header = () => {
  return (
    <>
      <div className="wrapper bg-gray-900">
        <div className="flexContainer flex items-center justify-between max-w-7xl">
          <img src={RMDBLogo} alt="puta" className="rmdbLogo w-52" />
          <img src={TMDBLogo} alt="puta" className="tmdbLogo w-28" />
        </div>
      </div>
    </>
  );
};
