import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tab from "./Tab";

test("'전체', '개발', '잡다'의 텍스트를 갖는 탭이 있는지 테스트", () => {
  render(<Tab />);

  const totalTab = screen.getByText("전체", { exact: true });
  const developTab = screen.getByText("개발", { exact: true });
  const restTab = screen.getByText("잡다", { exact: true });

  expect(totalTab).toBeInTheDocument();
  expect(developTab).toBeInTheDocument();
  expect(restTab).toBeInTheDocument();
});

test("각 탭을 클릭 했을 때 포커싱 되는지 테스트", async () => {
  render(<Tab />);

  const developTab = screen.getByText("개발", { exact: true });
  await userEvent.click(developTab);
  expect(developTab).toHaveClass("selected");

  const restTab = screen.getByText("잡다", { exact: true });
  await userEvent.click(restTab);
  expect(restTab).toHaveClass("selected");

  const totalTab = screen.getByText("전체", { exact: true });
  await userEvent.click(totalTab);
  expect(totalTab).toHaveClass("selected");
});
