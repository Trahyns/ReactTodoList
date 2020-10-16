import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers/FormReducer"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer)

render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root")
);
