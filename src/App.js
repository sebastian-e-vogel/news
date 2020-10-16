import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
  Deportes,
  Tecnologia,
  Internacional,
  Espectaculo,
} from "./components/Pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/deportes" component={Deportes} />
            <Route exact path="/tecnologia" component={Tecnologia} />
            <Route exact path="/internacional" component={Internacional} />
            <Route exact path="/espectaculo" component={Espectaculo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
