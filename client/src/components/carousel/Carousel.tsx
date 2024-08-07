"use client";

import React, { ReactNode } from "react";
import { CarouselProvider } from "./CarouselContext";
import Content from "./Content";
import Indicators from "./Indicators";
import "./index.css";

interface CarouselProps {
  children: ReactNode;
}

const CarouselMain = ({ children }: CarouselProps) => {
  const contentCount = React.Children.count(children) - 1;
  return (
    <CarouselProvider contentCount={contentCount}>
      <div className="carousel-wrapper">{children}</div>
    </CarouselProvider>
  );
};

const Carousel = Object.assign(CarouselMain, {
  Content: Content,
  Indicators: Indicators,
});

export default Carousel;
