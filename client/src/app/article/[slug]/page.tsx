import Navbar from "@/components/navbar/Navbar";
import PostHeader from "@/components/post-header/PostHeader";
import { getPostPaths, getPostDetail, extractSlug } from "@/lib/post";
import styles from "./page.module.css";
import classnames from "classnames/bind";

type Props = {
  params: { slug: string };
};

const cx = classnames.bind(styles);

export function generateStaticParams() {
  const paths: string[] = getPostPaths();
  const paramList = paths
    .map((path) => extractSlug(path))
    .map((item) => ({ slug: item.slug }));
  return paramList;
}

export default async function PostDetail({ params: { slug } }: Props) {
  const post = await getPostDetail(slug);

  return (
    <>
      <Navbar />

      <article className={cx("article-wrapper")}>
        <PostHeader post={post} />
      </article>
    </>
  );
}
