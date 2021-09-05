import "./App.css";
import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users"; //url from which we are fetching all of our data

function App() {
  return (
    <>
      <div className="container">
        <div className="frame">
          <Frame /> {/* FRAME  */}
        </div>
      </div>
    </>
  );
}

const Frame = () => {
  const [isLoading, setLoading] = useState(true); // SETS THE STATE OF THE PAGE TO LOADING ON THE RETURN WHERE WE VERIFY ITS STATE
  const [isError, setError] = useState(false); // SETS THE STATE OF THE PAGE TO ERROR ON THE RETURN WHERE WE VERIFY ITS STATE
  const [users, setUsers] = useState([]); //USERS ARRAY, WERE WE STORE THE DATA THAT WE FETCHED AND WE USE IT TO DISPLAY THE USERS
  const [isChange, setChange] = useState(false); // BOOLEAN TO VERIFY IF THE USERS CLICKED ON THE CHANGE BUTTONS THAT WILL MAKE THE PAGE RE-RENDER
  const [i, setI] = useState(1); // CONTROLLER TO LET THE PROGRAM KNOW WHAT USER WE WANT TO DISPLAY

  const getUsers = async () => {
    //FUNCTION WILL RUN EVERY TIME WE UPDATE THE IS CHANGE VARIABLE AND WILL FETCH THE DATA AGAIN
    // FUNCTION THAT FETCHES THE USERS FROM THE URL
    const response = await fetch(url); // FETCHING URL
    if (response.status >= 200 && response.status < 299) {
      //CHECKING IF IT DOES NOT RETURN AN ERROR
      setLoading(false); // SETTING LOADING TO FALSE
      const users = await response.json(); // WE GET AND STORE THE RESPONSE ON A USERS CONST VAR
      const newArr = users.slice(i - 1, i); // WE DECLARE A NEW ARR THAT WILL STORE ONLY THE USER THAT WE WANNA DISPLAY
      setUsers(newArr); // AND FINALLY WE SET THE USERS USE STATE TO THE ARRAY THAT ONLY CONTAINS THE USER THAT WE WANNA DISPLAY
    } else {
      setError(true); //IF IT THE RESPONSE RETURNS AN ERROR WE SET ERROR TO TRUE SO THAT IT RENDERS THE ERROR SIDE
      setLoading(false); //AND WE SET isLoading TO FALSE SO THAT IT LETS THE PROGRAM PASS TO THE OTHER RENDERS TO CHECK CONDITIONS
    }
  };

  const change = (op) => {
    //FUNCTION THAT WILL BE TRIGGERED ON CLICK AND WILL CHANGE THE ISCHANGE STATE AND WILL INCREASE OR DECREASE THE I USESTATE
    if (op === 0) {
      // IF WE TRIGGER THE RIGHT BUTTON
      setChange(!isChange); // WE SET THE ISCHANGE USESTATE TO THE OPPOSITE VALUE
      setI(i + 1); // WE INCREASE THE I USESTATE
    } else {
      // IF WE TRIGGER THE LEFT BUTTON
      setChange(!isChange); // WE SET THE ISCHANGE USESTATE TO THE OPPOSITE VALUE
      setI(i - 1); // WE DECREASE THE I USESTATE
    }
  };

  useEffect(() => {
    // THIS useEffect WILL BE TRIGGERED ON THE FIRST RENDER AND WILL CALL THE FUNCTION THAT WILL FETCH THE DATA FROM THE URL
    // IT WILL BE TRIGGERED EVERY TIME WE UPDATE THE ISCHANGE VARIABLE
    getUsers(); // WE CALL THE GET USERS FUCTION THAT FETCHES THE DATA FROM THE URL
  }, [isChange]); // WE SPECIFY WHEN THE useEffect WILL BE TRIGGERED [isChange]

  useEffect(() => {
    // this useEffect WILL RUN EVERY TIME WE UPDATE THE USERS ARRAY
    //IT WILL CHECK IF THE ARRAY'S LENGTH IS 0
    //IF THEN, IT MAKES IT GO BACK TO THE START
    if (users.length === 0) {
      setI(1); // WE SET I TO 1 SO THAT IT STARTS FROM THE BEGGINING BACK AGAIN
      getUsers(); //WE FETCH THE DATA AGAIN
    }
  }, [users]);

  if (isLoading) {
    // IF ISLOADING IS TRUE WE WILL RENDER A LOADING SCREEN
    return <h1> LOADING </h1>;
  }
  if (isError) {
    // IF ISERROR IS TRUE WE'LL RENDER A ERROR SCREEN
    return <h1>ERROR!!!</h1>;
  }

  return (
    // HERE IF THERE IS NO ERROR NOR IS LOADING STILL, WE RENDER THE APP
    <div className="fcont">
      {users.map((user) => {
        // WE LOOP IN THE USERS ARRAY, 'IT WILL ONLY CONTAIN THE USER THAT WE WANT AND ITS DATA'
        const { id, login, avatar_url } = user; // WE SPECIFY THE DATA THAT WE WANT... IN THIS CASE ID, LOGIN, AVATAR
        return (
          <div key={id} className="frameContainer">
            <img src={avatar_url} alt="AVATAR" />
            <h4>{login}</h4>
            <h5>the bitch</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              voluptatum ipsum error soluta cumque dolorum nemo, consequuntur
              ullam est culpa tempore repellendus rem nulla fuga odio architecto
              accusantium commodi labore!
            </p>
            <span className="span1" onClick={() => change(1)}>
              {" "}
              {"< "}{" "}
            </span>{" "}
            <span className="span2" onClick={() => change(0)}>
              {" "}
              {" >"}{" "}
            </span>
            <button className="btn">Surprise Me!</button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
