import { PostMatter } from "@/config/types";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

const BASE_PATH = "/src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 MDX 파일 조회
export const getPostPaths = () => {
  const paths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return paths;
};

// MDX 파일 파싱
const parsePost = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const frontMatter = data as PostMatter;
  return { ...frontMatter, content };
};

// MDX 파일의 동적 세그먼트(slug) 뽑아내기
export const extractSlug = (path: string) => {
  const filePath = path
    .slice(path.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const slug = filePath;
  const url = `/article/${slug}`;
  return { url, slug };
};

// 게시물 내용 조회
export const getPostDetail = async (slug: string) => {
  const filePath = `${POSTS_PATH}/${slug}/content.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};
