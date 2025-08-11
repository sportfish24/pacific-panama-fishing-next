import React from "react";
import { render } from "@testing-library/react";
import ContactES from "./page";

describe("ContactES", () => {
  it("renders the Contact page in Spanish", () => {
    render(<ContactES />);
  });
});
