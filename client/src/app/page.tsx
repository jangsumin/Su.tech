import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { Carousel, Content, Indicators } from "@/components/carousel";
import Tab from "@/components/tab/Tab";
import PostPreview from "@/components/post-preview/PostPreview";
import PopularPost from "@/components/popular-post/PopularPost";
import Tag from "@/components/tag/Tag";
import classnames from "classnames/bind";
import styles from "./page.module.css";

const cx = classnames.bind(styles);

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

      <div className={cx("content-wrapper")}>
        <div className={cx("main-content-wrapper")}>
          <Tab />

          <PostPreview
            title="합성 컴포넌트 패턴, 정체를 밝혀라."
            subscription="복잡한 컴포넌트의 구성 요소를 조합해서 만드는 방법을 소개합니다."
            createdAt="2024월 8월 16일"
            thumbnailSrc="/images/pipe.png"
          />

          <PostPreview
            title="합성 컴포넌트 패턴, 정체를 밝혀라."
            subscription="복잡한 컴포넌트의 구성 요소를 조합해서 만드는 방법을 소개합니다."
            createdAt="2024월 8월 9일"
            thumbnailSrc="/images/pipe.png"
          />
        </div>

        <div className={cx("sub-content-wrapper")}>
          <PopularPost />

          <Tag
            tagList={[
              { tagId: 1, tagName: "Frontend" },
              { tagId: 2, tagName: "Backend" },
              { tagId: 3, tagName: "생산성" },
              { tagId: 4, tagName: "React" },
              { tagId: 5, tagName: "storybook" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
