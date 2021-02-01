import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Resumes from "./Components/Resumes/Resumes";
import Cv from "./Components/CV/Cv";
import Linkedin from "./Components/Linkedin/Linkedin";
import Wearelaika from "./Components/Wearelaika/Wearelaika";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
          <Route path="/resumes">
            <Resumes />
          </Route>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/linkedin">
            <Linkedin />
          </Route>
          <Route path="/wearelaika">
            <Wearelaika />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
