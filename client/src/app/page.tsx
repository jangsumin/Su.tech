import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import Content from "@/components/carousel/Content";
import Indicators from "@/components/carousel/Indicators";

export default function Home() {
  return (
    <>
      <Navbar />

      <Carousel>
        <Content index={0}>
          <Image
            src="/images/open.png"
            alt="open"
            fill
            style={{ objectFit: "contain" }}
          />
        </Content>

        <Content index={1}></Content>
        <Content index={2}></Content>

        <Indicators />
      </Carousel>
    </>
  );
}
