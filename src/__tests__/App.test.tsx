import React from "react";
import { StaticRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders progress indicator", () => {
  render(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  let linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Phone/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Salary/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Summary/i);
  expect(linkElement).toBeInTheDocument();

  expect(screen.getAllByRole("listitem")).toHaveLength(5);
});
