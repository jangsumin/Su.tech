import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />

      <Carousel>
        <Carousel.Content></Carousel.Content>

        <Carousel.PointerGroup>
          <Carousel.PointerGroup.Pointer isSelected={false} />
          <Carousel.PointerGroup.Pointer isSelected={true} />
          <Carousel.PointerGroup.Pointer isSelected={false} />
          <Carousel.PointerGroup.Pointer isSelected={false} />
        </Carousel.PointerGroup>
      </Carousel>
    </>
  );
}
