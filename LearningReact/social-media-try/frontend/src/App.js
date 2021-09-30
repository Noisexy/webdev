import "./App.css";
import { SignUp } from "./components/SignUp";
import { HomePage } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
