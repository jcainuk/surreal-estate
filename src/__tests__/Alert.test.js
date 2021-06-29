import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("it displays an error message", () => {
    const { asFragment } = render(<Alert message="Error!" isSuccess={false} />);
    expect(screen.getByText("Error!")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
