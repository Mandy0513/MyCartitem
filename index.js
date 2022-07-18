import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
