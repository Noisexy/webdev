import React, { useState, useEffect } from "react";
import "./app.css";
import { arr } from "./db";

const App = () => {
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: "rgb(120,0,198)",
            textAlign: "center",
            margin: "40px",
          }}
        >
          Our Tours
        </h1>
        <Card />
      </div>
    </>
  );
};

//componet card
const Card = () => {
  const [tours, setTour] = useState(arr);
  const [isReadMore, setIsReadMore] = useState(false);

  const makeNewDesc = (desc) => {
    return desc.slice(0, 250);
  };

  const notNow = (id) => {
    const newArr = tours.filter((item) => item.id !== id);
    console.log(newArr);
    setTour(newArr);
  };

  if (tours.length > 0) {
    return (
      <>
        {tours.map((tour) => {
          const { id, img, title, price, description } = tour;
          return (
            <>
              <div
                key={id}
                style={{
                  width: "40%",
                  marginTop: "50px",
                  background: "white",
                  margin: "30px auto",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <img
                  src={img}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "15px",
                  }}
                />
                <h3 style={{ color: "blueviolet", margin: "10px" }}>{title}</h3>
                <h3
                  style={{
                    margin: "10px",
                    display: "inline",
                    marginLeft: "90%",
                  }}
                >
                  {price}
                </h3>
                <p style={{ margin: "10px" }}>
                  {description.length < 250
                    ? description
                    : makeNewDesc(description)}
                  {isReadMore && description.slice(-(description.length - 250))}

                  <button
                    className="readBtn"
                    onClick={() => setIsReadMore(!isReadMore)}
                  >
                    {isReadMore ? "show less" : "read more"}
                  </button>
                </p>

                <button className="btn" onClick={() => notNow(id)}>
                  Not interested
                </button>
              </div>
            </>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setTour(arr)}>Refresh</button>
      </>
    );
  }
};

export default App;
