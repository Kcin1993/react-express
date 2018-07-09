import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./routes/about";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <small>
          Simple React + Express Starter. Go <Link to="/about">About</Link>.{" "}
          <Link to="/">home</Link>
        </small>
        <Route exact path="/" render={() => <p>Home page</p>} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
