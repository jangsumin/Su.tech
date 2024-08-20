import { MDXRemote } from "next-mdx-remote/rsc";
import { Post } from "@/config/types";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
// @ts-expect-error no types;
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import styles from "./PostBody.module.css";
import classnames from "classnames/bind";

interface Props {
  post: Post;
}

const cx = classnames.bind(styles);

const PostBody = ({ post }: Props) => {
  return (
    <div className={cx("post-body-wrapper")}>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks, remarkA11yEmoji],
            rehypePlugins: [
              rehypeSlug,
              [rehypePrettyCode, { theme: "github-light" }],
            ],
          },
        }}
      />
    </div>
  );
};

export default PostBody;
