import React from "react";
import { withIcon } from "../../hoc";

const FeaturedPlayList = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H2V2H20V16ZM4 7H13V9H4V7ZM4 4H13V6H4V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FeaturedPlayList;
