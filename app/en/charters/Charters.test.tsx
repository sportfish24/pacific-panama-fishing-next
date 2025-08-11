import React from "react";
import { render, screen } from "@testing-library/react";
import ChartersPage from "./page";

describe("ChartersPage", () => {
  it("renders the Charters page heading", () => {
    render(<ChartersPage />);
    expect(screen.getByRole("heading", { name: /Charters/i })).toBeInTheDocument();
  });
});
