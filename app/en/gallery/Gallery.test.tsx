import React from "react";
import { render, screen } from "@testing-library/react";
import GalleryPage from "./page";

describe("GalleryPage", () => {
  it("renders the Gallery page heading", () => {
    render(<GalleryPage />);
    expect(screen.getByRole("heading", { name: /Gallery/i })).toBeInTheDocument();
  });
});
