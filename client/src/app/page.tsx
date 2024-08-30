import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { Carousel, Content, Indicators } from "@/components/carousel";
import Tab from "@/components/tab/Tab";
import PostPreviewList from "@/components/post-preview-list/PostPreviewList";
import PopularPost from "@/components/popular-post/PopularPost";
import Tag from "@/components/tag/Tag";
import { getPostList } from "@/lib/post";
import classnames from "classnames/bind";
import styles from "./page.module.css";

const cx = classnames.bind(styles);

export default async function Home() {
  const postList = await getPostList();

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

          <PostPreviewList postList={postList} />
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
