import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

describe("App tests", () => {
  test("should render input with placeholder text", () => {
    const page = render(<App />, { wrapper: BrowserRouter });
    const input = page.getByPlaceholderText(/Type your postcode here/i);
    expect(input).toBeInTheDocument();
  });
  test("should render submit button", () => {
    const page = render(<App />, { wrapper: BrowserRouter });
    const button = page.getByTestId("submitButton");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Submit");
  });
});
