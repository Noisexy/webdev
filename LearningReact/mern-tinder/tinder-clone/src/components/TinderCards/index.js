import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

export const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/tinder/card");
      setPeople(request.data);
    }

    fetchData();
  }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          const { name, imgUrl } = person;
          return (
            <TinderCard
              className="swipe"
              key={name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, name)}
              onCardLeftScreen={() => outOfFrame(name)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${imgUrl})` }}
              >
                <h3>{name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};
