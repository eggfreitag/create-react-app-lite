import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <>
    <App />
    <p>Should be rendered after App component</p>
  </>,
);
