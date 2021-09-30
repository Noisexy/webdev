import "./App.css";
import io from "socket.io-client";
import React, { useState } from "react";

const socket = io.connect("http://localhost:4000/test");

function App() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  return <div className="App"></div>;
}

export default App;
