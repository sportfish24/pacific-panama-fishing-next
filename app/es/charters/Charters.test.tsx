import React from "react";
import { render } from "@testing-library/react";
import ChartersES from "./page";

describe("ChartersES", () => {
  it("renders the Charters page in Spanish", () => {
    render(<ChartersES />);
  });
});
