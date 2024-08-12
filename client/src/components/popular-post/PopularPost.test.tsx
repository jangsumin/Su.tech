import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PopularPost from "./PopularPost";

test("'인기있는 글'이라는 텍스트가 존재하는지 테스트", () => {
  render(<PopularPost />);

  expect(screen.getByText("인기있는 글", { exact: true })).toBeInTheDocument();
});

test("마우스 호버, 언호버 시에 텍스트가 다른 색깔로 변화하는지 테스트", async () => {
  render(<PopularPost />);

  const heading = screen.getAllByRole("heading", { level: 1 });

  for (let i = 0; i < heading.length; i++) {
    expect(heading[i]).toHaveStyle({ color: "var(--main-font)" });

    await userEvent.hover(heading[i]);
    expect(heading[i]).toHaveStyle({ color: "var(--selected-font)" });

    await userEvent.hover(heading[i]);
    expect(heading[i]).toHaveStyle({ color: "var(--main-font)" });
  }
});
