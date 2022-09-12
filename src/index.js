import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import store from "../src/store";
import { Provider } from "react-redux";

// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
