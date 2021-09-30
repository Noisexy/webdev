import React, { useState } from "react";
import "./modal.css";
import axios from "../../axios";

export const Modal = ({ state, dispatch }) => {
  const { isModalOpen, isModalStatus } = state;
  const [status, setStatus] = useState({ status: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setStatus({ ...status, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal">
      {isModalStatus && (
        <>
          <form className="modalForm" onSubmit={(e) => handleSubmit(e)}>
            <span
              className="modalBurger"
              onClick={() => dispatch({ type: "exitStatus" })}
            ></span>
            <span
              className="modalBurger burger2"
              onClick={() => dispatch({ type: "exitStatus" })}
            ></span>
            <textarea
              className="statusContent"
              placeholder="What's on your mind?"
              name="status"
              value={status.status}
              onChange={handleChange}
            ></textarea>
            <button className="submitButton">SEND</button>
          </form>
        </>
      )}
    </div>
  );
};
