import styles from "./Resumes.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cv from "../CV/Cv";
import Linkedin from "../Linkedin/Linkedin";
import Wearelaika from "../Wearelaika/Wearelaika";
import Banner from "../Banner/Banner";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
      <div className={styles.bg}>
        <Container fluid className={styles.containerfluid}>
          <Row>
            <Col md={8}>
              <div className={styles.Navmenu}>
                <Link to="/CV">
                  {" "}
                  <button type="button" class={styles.button}>
                    CV
                  </button>
                </Link>

                <Link to="/Linkedin">
                  {" "}
                  <button type="button" class={styles.button}>
                    Linkedin
                  </button>
                </Link>

                <Link to="/Wearelaika">
                  {" "}
                  <button type="button" class={styles.button}>
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
            </Col>
            <Col md={4}>
              <div className={styles.tips}>
                <p>
                  Move your mouse over different parts of the image to get
                  instructions about that specific section
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Banner />
    </Router>
  );
}
