import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "./Header";

test("Header Test", () => {
  // Rendering the App component
  render(<Header />);
  // Retrieving an element on the screen that contains the text "Emoji Search"
  const headerText = screen.getByText(/Emoji Search/i);
  // Asserting that the header text is present in the rendered component
  expect(headerText).toBeInTheDocument();
});
