import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tag from "./Tag";

const tagListData = [
  { tagId: 1, tagName: "Frontend" },
  { tagId: 2, tagName: "Backend" },
  { tagId: 3, tagName: "생산성" },
  { tagId: 4, tagName: "React" },
  { tagId: 5, tagName: "storybook" },
];

test("tagList의 tagName들이 모두 렌더링된다.", () => {
  render(<Tag tagList={tagListData} />);

  for (let i = 0; i < tagListData.length; i++) {
    expect(screen.getByText(tagListData[i].tagName, { exact: true }))
      .toBeInTheDocument;
  }
});

test("무작위로 태그 버튼을 누르면 스타일이 변화한다.", async () => {
  render(<Tag tagList={tagListData} />);

  const btnIndex = Math.floor(Math.random() * tagListData.length);
  const btn = screen.getByText(tagListData[btnIndex].tagName, { exact: true });

  expect(btn).toHaveClass("non-selected");

  await userEvent.click(btn);
  expect(btn).toHaveClass("selected");
});
