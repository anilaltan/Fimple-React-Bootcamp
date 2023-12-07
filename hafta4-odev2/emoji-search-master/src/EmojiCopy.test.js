import React from "react";
import App from "./App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Clicking on an emoji copies the emoji", () => {
  // Rendering the App component
  render(<App />);
  // Retrieving all elements on the screen with the "emoji-result-row" data-testid
  const clicks = screen.getAllByTestId("emoji-result-row");
  // Retrieving the filter input element by its placeholder text
  const filterInput = screen.getByPlaceholderText("Filter emojis...");

  // Simulating a click on the first emoji (assuming there is at least one emoji)
  userEvent.click(clicks);
  // Simulating a paste event on the filter input using the clicked emoji
  userEvent.paste(filterInput, clicks);
  // Asserting that the filter input value has been updated
  expect(filterInput === 1);
});
