import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import GlobalStyle from "./components/GlobalStyle";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
