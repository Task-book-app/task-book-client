import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FontAwesomeListItem = ({
  href,
  icon,
  boldContent,
  content,
  transform,
}) => {
  return (
    <li className="list-item">
      <a href={href} target="_blank" rel="noreferrer" className="list-link">
        <FontAwesomeIcon
          listItem
          icon={icon}
          transform={transform}
          fixedWidth
          //   pull="right"
        />
        <span className="list-link-content">{boldContent}</span> {content}
      </a>
    </li>
  );
};

export default FontAwesomeListItem;
