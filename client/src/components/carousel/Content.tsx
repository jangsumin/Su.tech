"use client";

import { ReactNode } from "react";
import { useCarousel } from "./CarouselContext";
import "./index.css";

interface ContentProps {
  index: number;
  children?: ReactNode;
}

const Content = ({ index, children }: ContentProps) => {
  const { current } = useCarousel();

  return (
    <article
      className={`content ${current === index ? "selected" : "non-selected"}`}
    >
      {children}
    </article>
  );
};

export default Content;
