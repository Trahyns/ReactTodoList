import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import SimpleForm from "./pages/SimpleForm";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

export default () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={SimpleForm} />
  </BrowserRouter>
);
