import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import pages from "./pages/index";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <pages.Register /> */}
    <pages.Hotels />
    {/* <pages.Login /> */}
  </React.StrictMode>
);
