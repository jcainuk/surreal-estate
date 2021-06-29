import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });
});
