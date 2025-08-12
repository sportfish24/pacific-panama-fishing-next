import React from "react";
import { render } from "@testing-library/react";
import LocaleLayout from "./layout";
import { notFound } from "next/navigation";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("LocaleLayout", () => {
  it("calls notFound for invalid locale", () => {
    render(
      <LocaleLayout params={{ locale: "fr" }}>
        <div>Test</div>
      </LocaleLayout>
    );
    expect(notFound).toHaveBeenCalled();
  });
});
