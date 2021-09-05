import React, { useEffect, useState } from "react";
import "./App.css";
import { menudb } from "./menudb";

export const App = () => {
  const [showBreakfast, setShowBreakfast] = useState(true);
  const [showLunch, setShowLunch] = useState(false);
  const [showShakes, setShowShakes] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const setMenuShow = (id) => {
    if (id == 0) {
      setShowBreakfast(false);
      setShowLunch(false);
      setShowShakes(false);
      setShowAll(true);
    }
    if (id == 1) {
      setShowBreakfast(true);
      setShowLunch(false);
      setShowShakes(false);
      setShowAll(false);
    }
    if (id == 2) {
      setShowBreakfast(false);
      setShowLunch(true);
      setShowShakes(false);
      setShowAll(false);
    }
    if (id == 3) {
      setShowBreakfast(false);
      setShowLunch(false);
      setShowShakes(true);
      setShowAll(false);
    }
  };

  return (
    <>
      <section className="menuSection">
        <div className="titleContainer">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <div className="btnContainer">
          <span onClick={() => setMenuShow(0)}>All</span>
          <span onClick={() => setMenuShow(1)}>BreakFast</span>
          <span onClick={() => setMenuShow(2)}>Lunch</span>
          <span onClick={() => setMenuShow(3)}>Shakes</span>
        </div>
        <section className="menuDis">
          <div className="menuDisplay">
            {showBreakfast && <BreakfastMenu />}
            {showLunch && <LunchMenu />}
            {showShakes && <ShakesMenu />}
            {showAll && <AllMenu />}
          </div>
        </section>
      </section>
    </>
  );
};

const AllMenu = () => {
  const [All, setAll] = useState(menudb);
  return (
    <>
      {All.map((bf) => {
        const { id, name, Price, Description, img } = bf;
        return (
          <>
            <div className="itemContainer">
              <img src={img} alt="none" />
              <h3>{name}</h3>
              <h4>${Price}</h4>
              <p>{Description}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

const ShakesMenu = () => {
  const [shakes, setShakes] = useState(menudb);
  return (
    <>
      {shakes.map((bf) => {
        const { id, name, Price, Description, img } = bf;
        return (
          <>
            {id >= 6 && id <= 8 ? (
              <div className="itemContainer">
                <img src={img} alt="none" />
                <h3>{name}</h3>
                <h4>${Price}</h4>
                <p>{Description}</p>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};

const LunchMenu = () => {
  const [lunch, setLunch] = useState(menudb);
  return (
    <>
      {lunch.map((bf) => {
        const { id, name, Price, Description, img } = bf;
        return (
          <>
            {id >= 3 && id <= 5 ? (
              <div className="itemContainer">
                <img src={img} alt="none" />
                <h3>{name}</h3>
                <h4>${Price}</h4>
                <p>{Description}</p>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};

const BreakfastMenu = () => {
  const [breakFast, setBreakFast] = useState(menudb);

  return (
    <>
      {breakFast.map((bf) => {
        const { id, name, Price, Description, img } = bf;
        return (
          <>
            {id >= 0 && id <= 2 ? (
              <div className="itemContainer">
                <img src={img} alt="none" />
                <h3>{name}</h3>
                <h4>${Price}</h4>
                <p>{Description}</p>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};

// <div className="itemContainer">
//   <img
//     src="https://react-projects-5-menu.netlify.app/images/item-1.jpeg"
//     alt="none"
//   />
//   <h3>ButterMilk pancakes</h3>
//   <h4>$15</h4>
//   <p>
//     I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock
//     freegan copper mug whatever cold-pressed
//   </p>
// </div>;
