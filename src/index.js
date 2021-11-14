import React from "react";
import ReactDOM from "react-dom";
import Home from "./demo/index";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import myreducer from "./Redux/reducers/reducers";
import { Provider } from "react-redux";
const store = createStore(myreducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
