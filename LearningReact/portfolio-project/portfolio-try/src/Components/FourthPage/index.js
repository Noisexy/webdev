import React, { useRef, useEffect, useState } from "react";
import "./FourthPage.css";
import lightBgImage from "../../Images/blob-haikei.svg";
import darkBgImage from "../../Images/blob-haikeiDARK.svg";
import axios from "axios";

export const FourthPage = ({ darkMode }) => {
  const [emailData, setEmailData] = useState({ email: "", msg: "" });
  const bgColorRef = useRef(null);
  useEffect(() => {
    if (darkMode) {
      bgColorRef.current.style.backgroundImage = `url("${darkBgImage}")`;
    } else {
      bgColorRef.current.style.backgroundImage = `url("${lightBgImage}")`;
    }
  }, [darkMode]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/mail", emailData)
      .then(() => console.log("posted form"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="fourthPageSection" id="ContactMe" ref={bgColorRef}>
        <form className="fourthPageEmailContainer" onSubmit={handleSubmit}>
          <h1>Contact Me!</h1>
          <div className="infoEmailContainer">
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={emailData.email}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="emailContent">
            <textarea
              name="msg"
              placeholder="Email Content"
              value={emailData.msg}
              onChange={handleChange}
              required={true}
            ></textarea>
          </div>
          <button type="submit">SEND EMAIL</button>
        </form>
      </section>
    </>
  );
};
