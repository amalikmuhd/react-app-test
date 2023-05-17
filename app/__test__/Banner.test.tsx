/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Banner from "../components/Banner";
// import {describe, it} from "node:test";

describe("Banner component", () => {
  it("renders the banner component", () => {
    render(<Banner />);

    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("**Earn up to $200 for getting started");
  });
});
