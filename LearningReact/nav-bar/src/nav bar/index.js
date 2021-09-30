import React, { useRef, useState, useEffect } from "react";
import "./index.css";

export const NavBar = () => {
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const linksheight = linkRef.current.getBoundingClientRect().height;
    console.log(linksheight);
    if (showLinks) {
      linkRef.current.style.display = "flex";
    } else {
      linkRef.current.style.display = "none";
    }
  }, [showLinks]);

  return (
    <>
      <nav>
        <h3>Noisex</h3>
        <span
          className="burger T"
          onClick={() => setShowLinks(!showLinks)}
        ></span>
        <span
          className="burger B"
          onClick={() => setShowLinks(!showLinks)}
        ></span>
        <div className="linkContainer" ref={linkContainerRef}>
          <ul ref={linkRef}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="socialMedia">
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://img.icons8.com/cotton/64/000000/facebook.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="https://img.icons8.com/cotton/64/000000/instagram-new.png" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://img.icons8.com/cotton/64/000000/twitter.png" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
