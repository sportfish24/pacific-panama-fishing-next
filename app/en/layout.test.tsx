import React from "react";
import { render, act, screen } from "@testing-library/react";
import EnLayout from "./layout";

describe("EN Layout", () => {
  it("renders without crashing", async () => {
    await act(async () => {
      render(
        <EnLayout>
          <div>Test Child</div>
        </EnLayout>
      );
    });
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
