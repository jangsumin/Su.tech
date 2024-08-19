export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
  hashtag: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  content: string;
}
