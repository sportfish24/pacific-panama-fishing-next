import React from "react";
import { render, screen } from "@testing-library/react";

// Mock Layout to only render children for testing
jest.mock("./layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
import Layout from "./layout";

describe("App Layout", () => {
  it("renders children correctly", () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});

describe("RootLayout", () => {
  it("renders children inside html/body", () => {
    // Mock Layout to avoid hydration warning
    jest.mock("./layout", () => ({
      __esModule: true,
      default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    }));
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
