import React from "react";
import { render } from "@testing-library/react";
import EnLayout from "./layout";

describe("EN Layout", () => {
  it("renders without crashing", () => {
    render(
      <EnLayout>
        <div>Test Child</div>
      </EnLayout>
    );
  });
});
