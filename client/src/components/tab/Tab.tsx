"use client";

import { useState } from "react";
import "./Tab.css";

const Tab = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <ul className="tab-wrapper">
      <li
        className={`menu ${current === 0 ? "selected" : "non-selected"}`}
        onClick={() => setCurrent(0)}
      >
        전체
      </li>
      <li
        className={`menu ${current === 1 ? "selected" : "non-selected"}`}
        onClick={() => setCurrent(1)}
      >
        개발
      </li>
      <li
        className={`menu ${current === 2 ? "selected" : "non-selected"}`}
        onClick={() => setCurrent(2)}
      >
        잡다
      </li>
    </ul>
  );
};

export default Tab;
