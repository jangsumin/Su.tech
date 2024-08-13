"use client";

import { useCarousel } from "./CarouselContext";
import styles from "./Carousel.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Indicators = () => {
  const { current, setCurrent, contentCount } = useCarousel();

  return (
    <ul className={cx("indicators-wrapper")}>
      {Array.from({ length: contentCount }).map((_, index) => (
        <li
          className={cx({
            indicator: true,
            selected: current === index,
            "non-selected": current !== index,
          })}
          key={index}
          onClick={() => setCurrent(index)}
        ></li>
      ))}
    </ul>
  );
};

export default Indicators;
