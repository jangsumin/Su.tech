"use client";

import { useState } from "react";
import styles from "./Tab.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tab = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <ul className={cx("tab-wrapper")}>
      <li
        className={cx({
          menu: true,
          selected: current === 0,
          "non-selected": current !== 0,
        })}
        onClick={() => setCurrent(0)}
      >
        전체
      </li>
      <li
        className={cx({
          menu: true,
          selected: current === 1,
          "non-selected": current !== 1,
        })}
        onClick={() => setCurrent(1)}
      >
        개발
      </li>
      <li
        className={cx({
          menu: true,
          selected: current === 2,
          "non-selected": current !== 2,
        })}
        onClick={() => setCurrent(2)}
      >
        잡다
      </li>
    </ul>
  );
};

export default Tab;
