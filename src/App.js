import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Article from "./Pages/Article";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Experiences from "./Pages/Experience"

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Article" component={Article} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Experiences" component={Experiences} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
