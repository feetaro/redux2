import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { createRoot } from "react-dom/client";
import App from "./App";

//import ReactDOM from "react-dom";
//const rootElement = document.getElementById("root");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
