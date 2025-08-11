import React from "react";
import { render } from "@testing-library/react";
import SpeciesES from "./page";

describe("SpeciesES", () => {
  it("renders the Species page in Spanish", () => {
    render(<SpeciesES />);
  });
});
