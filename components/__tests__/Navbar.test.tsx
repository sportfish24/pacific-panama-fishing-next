import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";

// Mock next/link for Jest
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

// Mock next-intl hooks for Jest
const nav: Record<string, string> = {
  home: "Home",
  charters: "Charters",
  species: "Fish Species",
  catchLog: "Catch Log",
  gallery: "Gallery",
  contact: "Contact",
};
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => nav[key] || key,
  useLocale: () => "en",
}));

let mockPathname = "/en/catch-log";
jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

describe("Navbar", () => {
  beforeEach(() => {
    mockPathname = "/en/catch-log";
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Charters" })).toBeInTheDocument();
    expect(screen.getByText("Catch Log")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  });

  it("renders Spanish navigation links when pathname starts with /es", () => {
    mockPathname = "/es/catch-log";
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Excursiones" })).toBeInTheDocument();
    expect(screen.getByText("Registro")).toBeInTheDocument();
    expect(screen.getByText("Galería")).toBeInTheDocument();
  });

  it("renders locale switch button", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Español" })).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    ["Charters", "Species", "Catch Log", "Gallery", "Contact"].forEach(label => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });

  it("handles unknown pathname gracefully", () => {
    mockPathname = "/unknown/path";
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Charters" })).toBeInTheDocument();
  });
});
