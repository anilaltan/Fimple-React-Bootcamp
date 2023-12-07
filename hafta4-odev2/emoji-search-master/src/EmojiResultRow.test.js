import React from "react";
import App from "./App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Emoji list is successfully rendered on initial load", () => {
  // Rendering the App component
  render(<App />);
  // Retrieving all elements on the screen that contain the text "Click to copy emoji"
  const emojiItems = screen.getAllByText(/Click to copy emoji/i);
  // Asserting that there is at least one emoji item rendered
  expect(emojiItems.length).toBeGreaterThan(0);
});
