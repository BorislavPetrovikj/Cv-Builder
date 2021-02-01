import React, { Component } from "react";
import "./Resumes.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cv from "../CV/Cv";
import Linkedin from "../Linkedin/Linkedin";
import Wearelaika from "../Wearelaika/Wearelaika";
import Banner from "../Banner/Banner";

const routes = [
  {
    path: "/CV",
    exact: true,
    main: () => <Cv />,
  },
  {
    path: "/Linkedin",
    main: () => <Linkedin />,
  },
  {
    path: "/Wearelaika",
    main: () => <Wearelaika />,
  },
];

export default function Resumes() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/CV">
            {" "}
            <button type="button" class="btn btn-primary mt-4">
              CV
            </button>
          </Link>

          <Link to="/Linkedin">
            {" "}
            <button type="button" class="btn btn-primary mt-4">
              Linkedin
            </button>
          </Link>

          <Link to="/Wearelaika">
            {" "}
            <button type="button" class="btn btn-primary mt-4">
              Wearelaika
            </button>
          </Link>
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
      <Banner />
    </Router>
  );
}
