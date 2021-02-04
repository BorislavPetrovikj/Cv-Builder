import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Resumes from "./Components/Resumes/Resumes";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
