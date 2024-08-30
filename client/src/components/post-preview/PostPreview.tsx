import Image from "next/image";
import Link from "next/link";
import { convertDateToString } from "@/lib/date";
import styles from "./PostPreview.module.css";
import classnames from "classnames/bind";

interface PostPreviewProps {
  title: string;
  description: string;
  createdAt: Date;
  thumbnailSrc: string;
  url: string;
}

const cx = classnames.bind(styles);

const PostPreview = ({
  title,
  description,
  createdAt,
  thumbnailSrc,
  url,
}: PostPreviewProps) => {
  return (
    <Link href={url}>
      <article className={cx("post-preview-wrapper")}>
        <section className={cx("thumbnail-wrapper")}>
          <Image
            className={cx("thumbnail")}
            src={thumbnailSrc}
            alt={thumbnailSrc}
            width={170}
            height={130}
          />
        </section>

        <section>
          <h1 className={cx("title")}>{title}</h1>
          <p className={cx("description")}>{description}</p>
          <time className={cx("createdAt")}>
            {convertDateToString(createdAt)}
          </time>
        </section>
      </article>
    </Link>
  );
};

export default PostPreview;
