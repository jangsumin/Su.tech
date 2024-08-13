import Image from "next/image";
import styles from "./PostPreview.module.css";
import classnames from "classnames/bind";

interface PostPreviewProps {
  title: string;
  subscription: string;
  createdAt: string;
  thumbnailSrc: string;
}

const cx = classnames.bind(styles);

const PostPreview = ({
  title,
  subscription,
  createdAt,
  thumbnailSrc,
}: PostPreviewProps) => {
  return (
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
        <p className={cx("subscription")}>{subscription}</p>
        <time className={cx("createdAt")}>{createdAt}</time>
      </section>
    </article>
  );
};

export default PostPreview;
