import React from "react";
import { withIcon } from "../../hoc";

const CollectionsBookmark = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM15 2V7L14 6.25L13 7V2H15ZM18 14H6V2H11V11L14 8.75L17 11V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CollectionsBookmark;
