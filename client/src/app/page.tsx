import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />

      <Carousel>
        <Carousel.Content index={0}>
          <Image
            src="/images/open.png"
            alt="open"
            fill
            style={{ objectFit: "contain" }}
          />
        </Carousel.Content>

        <Carousel.Content index={1}></Carousel.Content>
        <Carousel.Content index={2}></Carousel.Content>

        <Carousel.Indicators />
      </Carousel>
    </>
  );
}
