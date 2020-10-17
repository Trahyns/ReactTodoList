import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import SimpleForm from "./pages/SimpleForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

export default () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={SimpleForm} />
    </Switch>
  </BrowserRouter>
);
