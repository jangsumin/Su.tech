import { PostMatter } from "@/config/types";
import Image from "next/image";
import styles from "./PostHeader.module.css";
import classnames from "classnames/bind";

interface Props {
  post: PostMatter;
}

const cx = classnames.bind(styles);

const PostHeader = ({ post }: Props) => {
  return (
    <>
      <section className={cx("thumbnail-wrapper")}>
        <Image src={post.thumbnail} alt="open" width={700} height={360} />
      </section>

      <h1 className={cx("title")}>{post.title}</h1>

      <ul className={cx("tags-list")}>
        {post.hashtag.split("·").map((tag, index) => (
          <li className={cx("tag")} key={`hashtag-${index}`}>
            {"#" + tag}
          </li>
        ))}
      </ul>

      <time className={cx("time")}>{post.dateString}</time>
    </>
  );
};

export default PostHeader;
