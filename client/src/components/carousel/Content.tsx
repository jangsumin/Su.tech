"use client";

import { ReactNode } from "react";
import { useCarousel } from "./CarouselContext";
import styles from "./Carousel.module.css";
import classnames from "classnames/bind";

interface ContentProps {
  index: number;
  children?: ReactNode;
}

const cx = classnames.bind(styles);

const Content = ({ index, children }: ContentProps) => {
  const { current } = useCarousel();

  return (
    <article
      className={cx({
        content: true,
        selected: current === index,
        "non-selected": current !== index,
      })}
    >
      {children}
    </article>
  );
};

export default Content;
