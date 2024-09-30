import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { store } from "./redux/store";

import Models from "./components/modals/index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from "./ErrorBoundary.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.removeItem("space");

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <ErrorBoundary>
        <App />
        <ToastContainer />
        <Models />
      </ErrorBoundary>
    </HashRouter>
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
