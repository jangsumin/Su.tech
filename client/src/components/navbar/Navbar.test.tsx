import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("로고와 돋보기 아이콘 렌더링", () => {
  render(<Navbar />);
});
