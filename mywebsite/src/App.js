import React from "react";
import ContextProvider from "./contexts/Context";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstPage from "./components/HomePage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <div className="app">
        <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </ContextProvider>
    </Router>
  );
};

export default App;
