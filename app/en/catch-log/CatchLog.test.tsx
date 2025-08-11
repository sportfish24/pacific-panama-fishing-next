import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatchLogEN from "./page";

// Mock next-intl for Jest
const catchLog: Record<string, string> = { title: "Catch Log" };
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => catchLog[key] || key,
}));

describe("CatchLogEN", () => {
  it("renders the Catch Log page title", () => {
    render(<CatchLogEN />);
    expect(screen.getByText("Catch Log")).toBeInTheDocument();
  });
});
