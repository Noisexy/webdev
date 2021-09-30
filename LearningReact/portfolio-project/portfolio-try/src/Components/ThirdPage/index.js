import React, { useState, useRef, useEffect } from "react";
import "./ThirdPage.css";
import { skillsArr } from "./skillsData";

import lightBgImage from "../../Images/layered-waves-haikei.svg";
import darkBgImage from "../../Images/layered-waves-haikeiDARK.svg";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ThirdPage = ({ darkMode }) => {
  const bgColorRef = useRef(null);
  useEffect(() => {
    if (darkMode) {
      bgColorRef.current.style.backgroundImage = `url("${darkBgImage}")`;
    } else {
      bgColorRef.current.style.backgroundImage = `url("${lightBgImage}")`;
    }
  }, [darkMode]);
  return (
    <>
      <section id="Projects" ref={bgColorRef}>
        <h1 style={{ color: "#fff" }}> Skills </h1>
        <SkillsChart />
      </section>
    </>
  );
};

const SkillsChart = () => {
  const [data, SetData] = useState(skillsArr);
  const [no, si] = useState(true);
  const barRef = useRef(null);

  const barRefs = useRef([]);
  barRefs.current = [];

  const handleScroll = () => {
    console.log("scrolled");
  };

  useEffect(() => {
    barRefs.current.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        width: 0,
        duration: 2,
      });
    });
  }, []);

  const addToRef = (el) => {
    if (el && !barRefs.current.includes(el)) {
      barRefs.current.push(el);
    }
  };

  return (
    <div className="skillsChartContainer">
      {data.map((skill, index) => {
        const { name, percentage } = skill;
        return (
          <div key={index} className="skillContainer">
            <p
              className="barShow"
              ref={addToRef}
              style={{ width: `${percentage}%` }}
            ></p>
            <span className="skillText" style={{}}>
              <p className="barName">{name}</p>
              <p
                className="barPercentage"
                style={{
                  marginLeft: `${percentage}%`,
                  marginTop: "-25px",
                }}
              >
                {percentage}%
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
