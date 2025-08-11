import React from "react";
import { render } from "@testing-library/react";
import LocaleLayout from "./layout";

describe("Locale Layout", () => {
  it("renders without crashing", () => {
    render(
      <LocaleLayout params={{ locale: "en" }}>
        <div>Test Child</div>
      </LocaleLayout>
    );
  });
});
