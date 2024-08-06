import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import Tab from "@/components/tab/Tab";
import PostPreview from "@/components/post-preview/PostPreview";
import PopularPost from "@/components/popular-post/PopularPost";
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

      <Tab />

      <PostPreview
        title="합성 컴포넌트 패턴, 정체를 밝혀라."
        subscription="복잡한 컴포넌트의 구성 요소를 조합해서 만드는 방법을 소개합니다."
        createdAt="2024월 8월 9일"
        thumbnailSrc="/images/pipe.png"
      />

      <PopularPost />
    </>
  );
}
