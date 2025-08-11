import React from "react";
import { render, screen } from "@testing-library/react";
import SpeciesPage from "./page";

describe("SpeciesPage", () => {
  it("renders the Species page heading", () => {
    render(<SpeciesPage />);
    expect(screen.getByRole("heading", { name: /Fish Species/i })).toBeInTheDocument();
  });
});
