import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../components/App";

describe("rendering", () => {
  it("should render Edit 'src/components/App.js' and save to reload.", () => {
    render(<App />);
    const string = screen.getByText("Learn React.......");
    expect(string).toBeInTheDocument();
  });
});
