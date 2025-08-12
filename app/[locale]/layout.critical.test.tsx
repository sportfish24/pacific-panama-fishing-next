import React from "react";
import { render } from "@testing-library/react";
import LocaleLayout from "./layout";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("LocaleLayout", () => {
  it("calls notFound for invalid locale", () => {
    const { notFound } = require("next/navigation");
    render(
      <LocaleLayout params={{ locale: "fr" }}>
        <div>Test</div>
      </LocaleLayout>
    );
    expect(notFound).toHaveBeenCalled();
  });
});
