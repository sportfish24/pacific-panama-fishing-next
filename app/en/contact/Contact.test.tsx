import React from "react";
import { render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the Contact page heading", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /Contact/i })).toBeInTheDocument();
  });
});
