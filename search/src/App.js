import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/navbar";
import Index from "./layout/index";
import detail from "./components/detail";

import "./App.css";

import { Provider } from "./context";
const App = () => {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/search/form/:tracecode" component={detail} />
            </Switch>
          </div>
        </>
      </Router>
      </Provider>
  );
};

export default App;
