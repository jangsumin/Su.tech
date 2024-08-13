"use client";

import React, { ReactNode } from "react";
import { CarouselProvider } from "./CarouselContext";
import styles from "./Carousel.module.css";
import classnames from "classnames/bind";

interface CarouselProps {
  children: ReactNode;
}

const cx = classnames.bind(styles);

const Carousel = ({ children }: CarouselProps) => {
  const contentCount = React.Children.count(children) - 1;
  return (
    <CarouselProvider contentCount={contentCount}>
      <div className={cx("carousel-wrapper")}>{children}</div>
    </CarouselProvider>
  );
};

export default Carousel;
