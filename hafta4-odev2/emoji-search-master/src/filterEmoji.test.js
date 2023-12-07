import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Emoji list is re-rendered based on filtering", () => {
  // Rendering the App component
  render(<App />);

  // Simulate filtering
  const filterInput = screen.getByPlaceholderText("Filter emojis...");
  fireEvent.change(filterInput, { target: { value: "happy" } });

  // Check if filtered emoji items are rendered
  const filteredEmojiItems = screen.getAllByTestId("emoji-result-row");
  expect(filteredEmojiItems.length).toBeGreaterThan(0);
});
