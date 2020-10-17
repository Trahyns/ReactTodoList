import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SimpleForm from "./pages/SimpleForm";
import TodoApp from "./components/TodoApp"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

export default () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/" component={TodoApp} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={SimpleForm} />
    </Switch>
  </BrowserRouter>
);
