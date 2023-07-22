import * as React from "react";
import {
  tagList,
  tag,
  tagText
} from "../components/tagList.module.css";

const TagList = ({tags}) => {
  return (
    <ul className={tagList}>
      {tags
        ? tags.map((e, index) => {
            return (
              <li key={index} className={tag}>
                <p className={tagText}>{e}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default TagList;
