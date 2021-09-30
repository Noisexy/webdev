import React, { useEffect, useRef, useState } from "react";
import "./SecondPage.css";
import PlayerPng from "../../Images/pixel-32x32.png";

import lightBgImage from "../../Images/stacked-waves-haikei.svg";
import darkBgImage from "../../Images/stacked-waves-haikeiDARK.svg";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const SecondPage = ({ darkMode }) => {
  const aboutMeRef = useRef(null);
  const bgColorRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutMeRef.current, {
      scrollTrigger: {
        trigger: aboutMeRef.current,
      },
      duration: 1,
      x: -600,
      ease: "bounce.out",
      delay: 1,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      bgColorRef.current.style.backgroundImage = `url("${darkBgImage}")`;
    } else {
      bgColorRef.current.style.backgroundImage = `url("${lightBgImage}")`;
    }
  }, [darkMode]);

  return (
    <>
      <section id="AboutMe" className="about" ref={bgColorRef}>
        <div className="aboutMeContainer">
          <div className="aboutMeTextContainer" ref={aboutMeRef}>
            <h1 className="strokeme">About Me</h1>
            <p className="strokeme">
              Born May 20th 2002 originary from San Pedro Sula, Honduras I Love
              coding, I'm passionate about web, software, and game development,
              currently focusing on web development
            </p>
          </div>
          <CodingEditor />
        </div>
      </section>
    </>
  );
};

export const CodingEditor = () => {
  const codingContainerRef = useRef(null);

  useEffect(() => {
    gsap.from(codingContainerRef.current, {
      scrollTrigger: {
        trigger: codingContainerRef.current,
      },
      duration: 4,
      x: 1500,
      ease: "elastic.out(1, 0.3)",
      delay: 3,
    });

    gsap.to(codingContainerRef.current, {
      scrollTrigger: {
        trigger: codingContainerRef.current,
      },
      //duration: 4,
      opacity: 1,
      //ease: "elastic.out(1, 0.3)",
    });
  }, []);

  return (
    <>
      <div className="codingContainer" ref={codingContainerRef}>
        <div className="codingChild1">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="codingChild2">
          <div className="codingCounter">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
        </div>
        <div className="codingChild3">
          {/* <p>const App </p>
          <p>const App </p>
          <p>const App </p>
          <p>const App </p>
          <p>const App </p> */}
          <span className="codingTextContainer">
            <br />
            <span style={{ color: "#FF0089" }}>while</span>
            <span style={{ color: "#FFF" }}>(</span>
            <span style={{ color: "#FF0089" }}>Alive</span>
            <span style={{ color: "#FFF" }}>)</span>
            <span style={{ color: "#FFC400" }}>{"{"}</span>

            <br />
            <span style={{ color: "#fff", marginLeft: "10px" }}>eat();</span>
            <br />
            <span style={{ color: "#fff", marginLeft: "10px" }}>sleep();</span>
            <br />
            <span style={{ color: "#fff", marginLeft: "10px" }}>code();</span>
            <br />
            <span style={{ color: "#FFC400" }}>{"}"}</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>
              {"//MERN STACK DEVELOPER"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

// const Game = () => {
//   const playerRef = useRef(null);
//   let pos = 15;

//   const handleMove = (keyPressed) => {
//     if (keyPressed === "d") {
//       console.log(playerRef.current.style.left);
//       playerRef.current.style.left = pos + "px";
//       pos = pos + 15;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", (e) => {
//       console.log(e.key + " " + e.code);
//       handleMove(e.key);
//     });

//     return document.removeEventListener("keydown", (e) => {});
//   }, []);

//   return (
//     <>
//       <div className="snakeContainer">
//         <img src={PlayerPng} className="snake" ref={playerRef}></img>
//       </div>
//     </>
//   );
// };
