import styles from "./PopularPost.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const PopularPost = () => {
  return (
    <section className={cx("popular-post-wrapper")}>
      <span className={cx("heading-text")}>인기있는 글</span>

      <ul className={cx("popular-post-list")}>
        <li className={cx("popular-post-element")}>
          <h1 className={cx("title")}>합성 컴포넌트 패턴, 정체를 밝혀라.</h1>
          <span className={cx("tag")}>React·UI·Component</span>
        </li>

        <li className={cx("popular-post-element")}>
          <h1 className={cx("title")}>
            얼마 전에 있었던 XXXX 면접 후기, 그리고 뼈 아픔
          </h1>
          <span className={cx("tag")}>XXXX·면접후기</span>
        </li>
      </ul>
    </section>
  );
};

export default PopularPost;
