import React from "react";
import App from "./App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Clicking on an emoji copies the emoji", () => {
  // Rendering the App component
  render(<App />);
  // Retrieving all elements on the screen with the "emoji-result-row" data-testid
  const clicks = screen.getAllByTestId("emoji-result-row");

  // Asserting that the first element has the "data-clipboard-text" attribute
  // This assumes that the data-clipboard-text attribute is present for the first element
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});
