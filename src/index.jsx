import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

import App from "./App";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
import { env } from "process";
root.render(
  <>
    <App />
    <p>Should be rendered after App component</p>
  </>,
);
