import React from "react";
import { render, act, screen } from "@testing-library/react";
import LocaleLayout from "./layout";

describe("Locale Layout", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(
        <LocaleLayout params={{ locale: "en" }}>
          <div>Test Child</div>
        </LocaleLayout>
      );
    });
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
