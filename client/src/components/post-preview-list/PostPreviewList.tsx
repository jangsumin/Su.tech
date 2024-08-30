// post 리스트 받아서 뿌리기
import { IPostPreview } from "@/config/types";
import PostPreview from "../post-preview/PostPreview";

const PostPreviewList = ({ postList }: { postList: IPostPreview[] }) => {
  return (
    <ul>
      {postList.map((post: IPostPreview, index: number) => {
        return (
          <li key={`postPreview-${index}`}>
            <PostPreview
              title={post.title}
              description={post.description}
              createdAt={post.createdAt}
              thumbnailSrc={post.thumbnailSrc}
              url={post.url}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostPreviewList;
