import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import Lessons from "./pages/lessons"
import Vocab from "./pages/vocab"
import CVE from "./pages/cve"



const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/lessons/" component={Lessons} />
      <Route path="/vocab/" component={Vocab} />
      <Route path="/cve/" component={CVE} />
    </div>
  </Router>
)

render(
  <App/>,
  document.getElementById('react-app')
);
