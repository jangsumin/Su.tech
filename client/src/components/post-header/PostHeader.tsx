import Image from "next/image";
import { IPostMatter } from "@/config/types";
import { convertDateToString } from "@/lib/date";
import styles from "./PostHeader.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const PostHeader = ({ postMatter }: { postMatter: IPostMatter }) => {
  return (
    <>
      <section className={cx("thumbnail-wrapper")}>
        <Image
          src={postMatter.thumbnailSrc}
          alt="open"
          width={700}
          height={360}
        />
      </section>

      <h1 className={cx("title")}>{postMatter.title}</h1>

      <ul className={cx("tags-list")}>
        {postMatter.hashtag.split("·").map((tag, index) => (
          <li className={cx("tag")} key={`hashtag-${index}`}>
            {"#" + tag}
          </li>
        ))}
      </ul>

      <time className={cx("time")}>
        {convertDateToString(postMatter.createdAt)}
      </time>
    </>
  );
};

export default PostHeader;
