import { render, screen } from "@testing-library/react";
import App from "./App";
import { vi } from "vitest";

// Mock react-slick
vi.mock("react-slick", () => ({
  default: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}));

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    screen.debug(); // prints out the jsx in the App component unto the command line
    // Add more specific assertions here
  });
HEAD
});

