import CarouselWrapper from "./CarouselWrapper";
import Content from "./Content";
import PointerGroup from "./PointerGroup";

const Carousel = Object.assign(CarouselWrapper, {
  Content: Content,
  PointerGroup: PointerGroup,
});

export default Carousel;
