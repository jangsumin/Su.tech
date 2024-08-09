import Navbar from "@/components/navbar/Navbar";
import PostPreview from "@/components/post-preview/PostPreview";
import PopularPost from "@/components/popular-post/PopularPost";

export default function Home() {
  return (
    <>
      <Navbar />
      <PostPreview
        title="합성 컴포넌트 패턴, 정체를 밝혀라."
        subscription="복잡한 컴포넌트의 구성 요소를 조합해서 만드는 방법을 소개합니다."
        createdAt="2024월 8월 9일"
        thumbnailSrc="/images/pipe.png"
      />
      <PopularPost />
    </>
  );
}
