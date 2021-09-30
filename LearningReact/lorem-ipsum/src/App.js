import "./App.css";
import React, { useState, useEffect } from "react";
import { arrDB } from "./arrDB";

function App() {
  const [value, setValue] = useState(0); // set our value to an intial value of 0
  const [loremArr, setLoremArr] = useState(arrDB); // get the reference to our database
  const [hasSubmitted, setHasSubmitted] = useState(false); // to check if the form has been submitted

  const handleChange = (e) => {
    setHasSubmitted(false);
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  useEffect(() => {
    const newArr = arrDB.slice(0, value); // array that will contain the amount of 'lorems' based on the input of the user;
    setLoremArr(newArr); // we set our useState to that array
  }, [value]); // we wanna useEffect every time the value is changed, on the first run our array will be empty due to it being 0 //line 6

  return (
    <div className="container">
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form action="" className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs: </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={value}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            GENERATE
          </button>
        </form>

        {hasSubmitted &&
          loremArr.map((lorem) => {
            const { text } = lorem;
            return (
              <p>
                {text}
                <br />
                <br />
              </p>
            );
          })}
      </section>
    </div>
  );
}

export default App;
