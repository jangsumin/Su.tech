"use client";

import "./Carousel.css";
import { useState } from "react";

function Carousel() {
  const [step, setStep] = useState<number>(0);

  const handleSlider = (step: number) => {
    setStep(step);
  };

  return (
    <div className="carousel-wrapper">
      {step === 0 && <div className="content"></div>}

      <ul className="slider-wrapper">
        <li
          className={`slider ${step === 0 ? "selected" : "non-selected"}`}
          onClick={() => handleSlider(0)}
        ></li>
        <li
          className={`slider ${step === 1 ? "selected" : "non-selected"}`}
          onClick={() => handleSlider(1)}
        ></li>
        <li
          className={`slider ${step === 2 ? "selected" : "non-selected"}`}
          onClick={() => handleSlider(2)}
        ></li>
        <li
          className={`slider ${step === 3 ? "selected" : "non-selected"}`}
          onClick={() => handleSlider(3)}
        ></li>
      </ul>
    </div>
  );
}

export default Carousel;
