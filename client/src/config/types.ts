export interface IPostMatter {
  title: string;
  createdAt: Date;
  thumbnailSrc: string;
  description: string;
  hashtag: string;
}

/***
 * content: MDX 파일의 내용
 */
export interface Post extends IPostMatter {
  content: string;
}

/***
 * slug: MDX의 article 하위의 경로 이름
 * url: `/article/${slug}`
 */
export interface IPostPreview extends IPostMatter {
  slug: string;
  url: string;
}
