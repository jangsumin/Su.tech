"use client";

import React, { ReactNode } from "react";
import { CarouselProvider } from "./CarouselContext";
import "./index.css";

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const contentCount = React.Children.count(children) - 1;
  return (
    <CarouselProvider contentCount={contentCount}>
      <div className="carousel-wrapper">{children}</div>
    </CarouselProvider>
  );
};

export default Carousel;
