import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

test("로고 아이콘 렌더링", () => {
  render(<Navbar />);
  const logoIcon = screen.getByAltText("logo");
  expect(logoIcon).toBeInTheDocument();
  expect(logoIcon).toHaveAttribute(
    "src",
    expect.stringContaining("su-tech.svg")
  );
});

test("돋보기 아이콘 렌더링", () => {
  render(<Navbar />);
  const searchIcon = screen.getByTitle("search");
  expect(searchIcon).toBeInTheDocument();
});
