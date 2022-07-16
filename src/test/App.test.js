import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

describe('should render Edit "src/components/App.js" and save to reload.', () => {
  render(<App />);
  const string = screen.getByTestId("Learn React.......");
  expect(string).toBeInTheDocument();
});
