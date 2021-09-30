import React, { useState } from "react";
import "./Styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainPage } from "./Components/MainPage";
import { SecondPage } from "./Components/SecondPage";
import { ThirdPage } from "./Components/ThirdPage";
import { FourthPage } from "./Components/FourthPage";
import { NavBar } from "./Components/NavBar";
import ProjectsPage from "./Components/ProjectsPage";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Router>
        <Switch>
          <div className="container">
            <NavBar />
            <Route exact path="/">
              <MainPage
                handleBackground={handleBackground}
                darkMode={isDarkMode}
              />
              <SecondPage darkMode={isDarkMode} />
              <ThirdPage darkMode={isDarkMode} />
              <FourthPage darkMode={isDarkMode} />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
};
