import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/homePage";

function App() {
  const [enterData, setEnterData] = useState({ username: "", password: "" });
  //this use state contains the login data from the user
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login enterData={enterData} setEnterData={setEnterData} />
        </Route>
        <Route path="/home">
          <HomePage enterData={enterData} setEnterData={setEnterData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
