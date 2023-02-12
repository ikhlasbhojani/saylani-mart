import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss"
import App from "./components/App";
import Theme from "./components/Config";





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Theme>
    <App />
    </Theme>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
