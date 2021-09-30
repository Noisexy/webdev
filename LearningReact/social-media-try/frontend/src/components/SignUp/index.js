import React, { useRef, useState, useEffect } from "react";
import "./SignUp.css";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const userInputRef = useRef(null);
  const userTextRef = useRef(null);
  const passInputRef = useRef(null);
  const passTextRef = useRef(null);
  const pass2InputRef = useRef(null);
  const pass2TextRef = useRef(null);

  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const [isPassMatch, setIsPassMatch] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isLoginOrSign, setIsLoginOrSign] = useState(true);
  const history = useHistory();

  const handleInputClick = (event) => {};

  useEffect(() => {
    setTimeout(() => {
      setIsPassMatch(true);
      setIsUsernameValid(true);
    }, 3000);
  }, [isPassMatch, isUsernameValid]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignUp({ ...signUp, [name]: value });
  };
  const handleSubmit = (e) => {
    const { username, password, password2 } = signUp;
    e.preventDefault();
    if (isLoginOrSign) {
      if (username.length < 4) {
        setIsUsernameValid(false);
        return;
      }
      if (password !== password2) {
        setIsPassMatch(false);
        return;
      }

      axios
        .post("/users", { username, password })
        .then((res) => console.log(res.data));
    } else {
      axios
        .post("/users/login", { username, password })
        .then((res) => {
          if (res.status) {
            if (res.status === 200) {
              return history.push("/home");
            }
          }
        })
        .catch((e) => console.log("user not found"));
    }
  };

  return (
    <section className="signUp">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="phone">
        <span className="notch"></span>
        <div className="pfp">
          <span className="circle"></span>
        </div>
        <div className="phoneSignContainer">
          <span className="signLine" style={{ width: "80%" }}></span>
          <span className="signLine" style={{ width: "50%" }}></span>
          <span className="signLine" style={{ width: "60%" }}></span>
          <span className="signLine" style={{ width: "20%" }}></span>
          <span className="signLine" style={{ width: "70%" }}></span>
        </div>
      </div>
      {!isPassMatch && (
        <h3 className="errorAlert" style={{ color: "red" }}>
          Passwords do not match
        </h3>
      )}
      {!isUsernameValid && (
        <h3 className="errorAlert" style={{ color: "red" }}>
          Usernames need to be at least 4 characters long
        </h3>
      )}
      <form className="signUpContainer" onSubmit={handleSubmit}>
        {isLoginOrSign ? <h1>Sign Up</h1> : <h1>Log In</h1>}
        <span className="placeholder">
          <h3 ref={userTextRef}>Username</h3>
          <input
            type="text"
            className="usernameInput"
            ref={userInputRef}
            onClick={handleInputClick}
            name="username"
            value={signUp.username}
            onChange={handleChange}
          />
        </span>
        <span className="placeholder pass">
          <h3 ref={passTextRef}>Password</h3>
          <input
            type="password"
            className="usernameInput"
            ref={passInputRef}
            onClick={handleInputClick}
            name="password"
            value={signUp.password}
            onChange={handleChange}
          />
        </span>
        {isLoginOrSign && (
          <span className="placeholder pass2">
            <h3 ref={pass2TextRef}>Repeat Password</h3>
            <input
              type="password"
              className="usernameInput"
              ref={pass2InputRef}
              onClick={handleInputClick}
              name="password2"
              value={signUp.password2}
              onChange={handleChange}
            />
          </span>
        )}
        {isLoginOrSign ? (
          <button type="submit" className="sendButton">
            Sign Up
          </button>
        ) : (
          <button type="submit" className="sendButton">
            Log In
          </button>
        )}
        {isLoginOrSign ? (
          <button
            type="button"
            className="alreadyButton"
            onClick={() => setIsLoginOrSign(!isLoginOrSign)}
          >
            Already Have an account?
          </button>
        ) : (
          <button
            type="button"
            className="alreadyButton"
            onClick={() => setIsLoginOrSign(!isLoginOrSign)}
          >
            Don't have an account?
          </button>
        )}
      </form>
    </section>
  );
};
