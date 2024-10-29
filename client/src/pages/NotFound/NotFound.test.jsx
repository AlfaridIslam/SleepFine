import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
import { vi } from "vitest";

// Mock any components or modules used in NotFound if necessary
// For example:
// vi.mock("../../components/SomeComponent", () => ({ default: () => <div>Mocked Component</div> }));

describe("NotFound", () => {
  it("renders the NotFound component", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    // Add assertions to check for expected content
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    // Add more specific assertions based on your NotFound component's content
  });
});
