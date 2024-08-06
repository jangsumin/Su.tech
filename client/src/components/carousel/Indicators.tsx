"use client";

import { useCarousel } from "./CarouselContext";
import "./index.css";

const Indicators = () => {
  const { current, setCurrent, contentCount } = useCarousel();

  return (
    <ul className="indicators-wrapper">
      {Array.from({ length: contentCount }).map((_, index) => (
        <li
          className={`indicator ${
            current === index ? "selected" : "non-selected"
          }`}
          key={index}
          onClick={() => setCurrent(index)}
        ></li>
      ))}
    </ul>
  );
};

export default Indicators;
