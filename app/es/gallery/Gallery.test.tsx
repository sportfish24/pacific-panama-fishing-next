import React from "react";
import { render } from "@testing-library/react";
import GalleryES from "./page";

describe("GalleryES", () => {
  it("renders the Gallery page in Spanish", () => {
    render(<GalleryES />);
  });
});
