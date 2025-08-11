import React from "react";
import { render } from "@testing-library/react";
import Layout from "./layout";

describe("App Layout", () => {
  it("renders without crashing", () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
  });
});
