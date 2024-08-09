import Image from "next/image";
import "./PostPreview.css";

interface PostPreviewProps {
  title: string;
  subscription: string;
  createdAt: string;
  thumbnailSrc: string;
}

const PostPreview = ({
  title,
  subscription,
  createdAt,
  thumbnailSrc,
}: PostPreviewProps) => {
  return (
    <article className="post-preview-wrapper">
      <section className="thumbnail-wrapper">
        <Image
          className="thumbnail"
          src={thumbnailSrc}
          alt={thumbnailSrc}
          width={170}
          height={130}
        />
      </section>

      <section>
        <h1 className="title">{title}</h1>
        <p className="subscription">{subscription}</p>
        <time className="createdAt">{createdAt}</time>
      </section>
    </article>
  );
};

export default PostPreview;
