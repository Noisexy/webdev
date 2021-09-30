import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import axios from "./axios";
import { useHistory } from "react-router-dom";

function Login({ enterData, setEnterData }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // actually signup modal, too lazy to correct the naming confusion xd

  const [isEnterModalOpen, setIsEnterModalOpen] = useState(false);
  // this is the actual login modal xd

  return (
    <section className="loginContainer">
      <div className="imageContainer">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="twitter login logo"
          className="imgContainerBg"
        />
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          alt="twitter logo vector png"
          className="loginImgtwiiterLogo"
        />
      </div>

      <div className="loginInfoContainer">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          alt="twitter logo vector png"
          className="loginInfoImgtwiiterLogo"
        />
        <h1>Happening now</h1>
        <h3>Join Twitter Today</h3>

        <div
          className="signUpBtn"
          onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
        >
          <span>Sign up with email</span>
        </div>
        <div
          className="signUpBtn"
          onClick={() => setIsEnterModalOpen(!isEnterModalOpen)}
        >
          <span>login with email</span>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          isEnterModalOpen={isEnterModalOpen}
          setIsEnterModalOpen={setIsEnterModalOpen}
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      )}
      {isEnterModalOpen && (
        <EnterModal
          isEnterModalOpen={isEnterModalOpen}
          setIsEnterModalOpen={setIsEnterModalOpen}
          enterData={enterData}
          setEnterData={setEnterData}
        />
      )}
    </section>
  );
}

//login modal component

const LoginModal = ({
  isLoginModalOpen,
  setIsLoginModalOpen,
  isEnterModalOpen,
  setIsEnterModalOpen,
}) => {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  // useState that we will use in order to store the data in the sign up form
  const [isPwdMatch, setisPwdMatch] = useState(true);
  //to check if both of the passwords match before submitting;
  useEffect(() => {
    setTimeout(() => {
      setisPwdMatch(true);
      // this will show for 5s that the passwords do not match in case they don't
    }, 5000);
  }, [isPwdMatch]);

  const handleChange = (e) => {
    const name = e.target.name;
    // getting the name in the input
    const value = e.target.value;
    //getting the value in the input
    setLoginData({ ...loginData, [name]: value });
    // setting the value that is being typed in the correct varible
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventing refrese on submitting the form
    const { password, password2 } = loginData;
    // deconstructing the loginData to get both passwords and verify if they match or not
    if (password === password2) {
      //if passwords do match
      axios
        .post("http://localhost:8000/api/v1/users", loginData)
        .then((res) => {
          if (res.status(404)) {
            console.log("user already in the db");
          } else {
            console.log("user created");
          }
        })
        .catch((err) => console.log(err.data));
      //we use axios to post to the url shown there and then pass the data

      setIsLoginModalOpen(false);
      // loginModal is actually sign up do not get confused
      // we set is to false to stop rendering it on screen
      setIsEnterModalOpen(true);
      //and then we show the real log in modal
    } else {
      setisPwdMatch(false);
      // this sets the match of the passwrods to false and will trigger the useEffect
    }

    setLoginData({ username: "", email: "", password: "", password2: "" });
    // set all of the values to false in order to stop storing them and also to stop showing them
  };

  return (
    <section className="loginModalContainer">
      <div className="loginModalFormContainer">
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <span>Create account now!</span>
          <span
            className="loginModalExitBtn"
            onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
          >
            X
          </span>
          <input
            type="text"
            placeholder="Username"
            required={true}
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            required={true}
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            required={true}
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          {!isPwdMatch && (
            <h3 style={{ color: "rgb(255,0,0)", position: "absolute" }}>
              Passwords do not match!
            </h3>
          )}
          <input
            type="password"
            placeholder="Repeat your password"
            required={true}
            name="password2"
            value={loginData.password2}
            onChange={handleChange}
          />
          <button type="submit"> NEXT </button>
        </form>
      </div>
    </section>
  );
};

// enter modal "modal that handles login into an account"

const EnterModal = ({
  isEnterModalOpen,
  setIsEnterModalOpen,
  enterData,
  setEnterData,
}) => {
  const history = useHistory();
  // history is a var that will allow us with the useHistory hook of react-router-dom to redirect the user to a different page
  const [isEnterError, setIsEnterError] = useState(false);
  // use state to check  if there is a login error

  useEffect(() => {
    setTimeout(() => {
      setIsEnterError(false);
      //this will allow us render the error password or username incorrectly
      //for 9ms
    }, 9000);
  }, [isEnterError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // we post to the url the enterData
    axios
      .post("http://localhost:8000/api/v1/users/enter", enterData)
      .then((response) => {
        if (response.status === 200) {
          // if everything is ok, "checking the status, if it is of 200 is ok"
          localStorage.setItem("user", enterData.username);
          // we use the local storage to set the item of the username to keep it stored even after refresh
          setEnterData({ ...enterData, password: "" });
          // we delete the password from the useState to not store it anymore
          history.push("/home");
          //and then we redirect to home page
        }
      })
      .catch((err) => setIsEnterError(true));
    //if there is an error, in the catch block we update the error useState to true
    //to show the text of username or pasword error
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEnterData({ ...enterData, [name]: value });
    //in order to let change the variables in the inputs
  };

  return (
    <section className="enterModalContainer">
      <div className="enterModalFormContainer">
        <form action="/home" method="POST" onSubmit={handleSubmit}>
          <span>Login!</span>
          {isEnterError && (
            <span style={{ color: "red" }}>user or password error</span>
          )}
          <span
            className="loginModalExitBtn"
            onClick={() => setIsEnterModalOpen(!isEnterModalOpen)}
          >
            X
          </span>
          <input
            type="text"
            required={true}
            placeholder="username"
            name="username"
            value={enterData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            required={true}
            placeholder="password"
            name="password"
            value={enterData.password}
            onChange={handleChange}
          />
          <button type="submit"> LOGIN </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
