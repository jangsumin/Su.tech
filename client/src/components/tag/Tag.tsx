"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./Tag.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

interface Tag {
  tagId: number;
  tagName: string;
}

interface TagsProps {
  tagList: Tag[];
}

const Tag = ({ tagList }: TagsProps) => {
  const [focusedTags, setFocusedTags] = useState<number[]>([]);

  const handleClickTag = (tagId: number) => {
    if (focusedTags.includes(tagId)) {
      setFocusedTags(focusedTags.filter((focusedTag) => focusedTag !== tagId));
    } else {
      setFocusedTags([...focusedTags, tagId]);
    }
  };

  return (
    <div className={cx("tags-wrapper")}>
      <span className={cx("heading-text")}>태그</span>

      <ul className={cx("tags-list")}>
        {tagList.map((tag) => (
          <li
            className={cx({
              tag: true,
              selected: focusedTags.includes(tag.tagId),
              "non-selected": !focusedTags.includes(tag.tagId),
            })}
            key={`tag-${tag.tagId}`}
            onClick={() => handleClickTag(tag.tagId)}
          >
            <>{tag.tagName}</>

            {focusedTags.includes(tag.tagId) && (
              <XMarkIcon className={cx("x-icon")} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
