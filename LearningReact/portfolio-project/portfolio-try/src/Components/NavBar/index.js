import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  const navBarRef = useRef(null);
  const burger1 = useRef(null);
  const burger2 = useRef(null);
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  const handleNavClick = () => {
    if (!isNavBarActive) {
      navBarRef.current.style.transform = "translateY(0px)";
      setIsNavBarActive(!isNavBarActive);
      burger1.current.style.animation = `burger1Anim 0.4s forwards`;
      burger2.current.style.animation = `burger2Anim 0.4s forwards`;
    } else {
      navBarRef.current.style.transform = "translateY(-1000px)";
      setIsNavBarActive(!isNavBarActive);
      burger1.current.style.animation = `burger1back 0.4s forwards`;
      burger2.current.style.animation = `burger2back 0.4s forwards`;
    }
  };

  return (
    <>
      <span className="navBtn" onClick={() => handleNavClick()}>
        <span className="Nbtn burger1" ref={burger1}></span>
        <span className="Nbtn burger2" ref={burger2}></span>
      </span>
      <nav ref={navBarRef}>
        <ul>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
