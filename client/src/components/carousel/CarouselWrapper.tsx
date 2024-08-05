import { ReactNode } from "react";
import "./index.css";

interface CarouselWrapperProps {
  children?: ReactNode;
}

function CarouselWrapper({ children }: CarouselWrapperProps) {
  return <div className="carousel-wrapper">{children}</div>;
}

export default CarouselWrapper;
