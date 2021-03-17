import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Birthday from "./birthday-reminder/App";
import Reviews from "./reviews/App";
import Tours from "./tours/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Route path="/birthday">
        <Birthday />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/tours">
        <Tours />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex" }}>
        <li>
          <Link to="/birthday">Birthday</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
      </ul>
    </nav>
  );
}
