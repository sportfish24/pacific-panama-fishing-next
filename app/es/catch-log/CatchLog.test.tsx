import React from "react";
import { render } from "@testing-library/react";
import CatchLogES from "./page";

describe("CatchLogES", () => {
  it("renders the Catch Log page in Spanish", () => {
    render(<CatchLogES />);
  });
});
