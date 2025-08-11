import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";

// Mock next/link for Jest
jest.mock("next/link", () => {
  const React = require("react");
  const Link = ({ href, children, prefetch, ...props }) =>
    React.createElement("a", { href, ...props }, children);
  return { __esModule: true, default: Link };
});

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

jest.mock("next/navigation", () => ({
  usePathname: () => "/en/catch-log",
}));

describe("Navbar", () => {
  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Charters")).toBeInTheDocument();
    expect(screen.getByText("Catch Log")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  });
});
