import React, { useRef, useEffect } from "react";
import Image from "../../Images/WhatsApp Image 2021-09-08 at 1.39.50 AM.jpeg";
import HFlag from "../../Images/Wikipedia-Flags-HN-Honduras-Flag.svg";
import "./MainPage.css";
import Parallax from "parallax-js";
import lightBgImage from "../../Images/layer1.svg";
import darkBgImage from "../../Images/layered-peaks-haikeiDARK.svg";

export const MainPage = ({ handleBackground, darkMode }) => {
  const bgColorRef = useRef(null);
  const textPar = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(textPar.current);
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
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
      <section id="#HomePage" className="home spacer layer1" ref={bgColorRef}>
        {/* <button class="navBtn">puta</button> */}
        <div className="HomePageWrapperDiv">
          <ImageContainer />
          <TextContainer />
          <DarkModeContainer
            bgColor={bgColorRef}
            handleBg={handleBackground}
            darkMode={darkMode}
          />
        </div>
      </section>

      <div
        className="parallaxText"
        ref={textPar}
        style={{
          position: "absolute",
          top: "0",
          color: "rgba(255,255,255,.1)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          data-depth="1"
          style={{
            marginLeft: "35%",
            marginTop: "-20%",
            fontSize: "100px",
            fontFamily: "Amatic SC , cursive",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </div>
      </div>
    </>
  );
};

const ImageContainer = () => {
  return (
    <div className="containerSection1">
      <span></span>
      <span></span>
      <span></span>
      <div className="ImageContainer">
        <img src={Image} alt="me" />
      </div>
    </div>
  );
};

const TextContainer = () => {
  return (
    <div className="textContainerSection1">
      <h1 className="strokeme">Guillermo Bolaños</h1>
      <p className="strokeme">Self-taught Full-Stack Web developer</p>
      <img src={HFlag} alt="honduran flag" />
      <a className="link1 strokeme" href="#AboutMe">
        About Me<span className="cross1"></span>
      </a>
      <a className="link2 strokeme" href="#Projects">
        Skills<span className="cross2"></span>
      </a>
      <a className="link3 strokeme" href="#ContactMe">
        Contact Me<span className="cross3"></span>
      </a>
    </div>
  );
};

const DarkModeContainer = ({ bgColor, handleBg, darkMode }) => {
  const darkModeSwitch = useRef(null);

  //const handleDarkMode = () => {
  // console.log(darkModeSwitch.current.style.animation);
  //bgColor.current.style.backgroundImage = `url("./")`;
  // if (bgColor.current.style.background !== "rgb(18, 18, 18)") {
  //   darkModeSwitch.current.style.animation = `LightToDarkAnim 0.9s ease forwards`;
  //   darkModeSwitch.current.style.background = "rgb(6, 30, 61)";
  //   bgColor.current.style.background = "rgb(18, 18, 18)";
  // } else {
  //   darkModeSwitch.current.style.animation = `DarkToLightAnim 0.9s ease forwards`;
  //   darkModeSwitch.current.style.background = "rgb(18, 18, 18)";
  //   bgColor.current.style.background = "rgb(6, 30, 61)";
  // }
  //};

  const handleDarkMode = () => {
    if (darkMode) {
      darkModeSwitch.current.style.animation = `DarkToLightAnim 0.9s ease forwards`;
      darkModeSwitch.current.style.background = "rgb(197,79,3)";
    } else {
      darkModeSwitch.current.style.animation = `LightToDarkAnim 0.9s ease forwards`;
      darkModeSwitch.current.style.background = "rgb(43,6,89)";
    }

    handleBg();
  };

  return (
    <div className="theme">
      <span
        className="btn1"
        ref={darkModeSwitch}
        onClick={() => handleDarkMode()}
      ></span>
    </div>
  );
};
