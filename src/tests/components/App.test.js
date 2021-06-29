import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../components/App";

test("renders surreal estate text", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/View Properties/i);
  expect(linkElement).toBeInTheDocument();
});
