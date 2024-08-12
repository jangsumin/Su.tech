import "./PopularPost.css";

const PopularPost = () => {
  return (
    <section className="popular-post-wrapper">
      <span className="heading-text">인기있는 글</span>

      <ul className="popular-post-list">
        <li className="popular-post-element">
          <h1 className="title">합성 컴포넌트 패턴, 정체를 밝혀라.</h1>
          <span className="tag">React·UI·Component</span>
        </li>

        <li className="popular-post-element">
          <h1 className="title">
            얼마 전에 있었던 XXXX 면접 후기, 그리고 뼈 아픔
          </h1>
          <span className="tag">XXXX·면접후기</span>
        </li>
      </ul>
    </section>
  );
};

export default PopularPost;
