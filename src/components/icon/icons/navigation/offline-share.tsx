import React from "react";
import { withIcon } from "../../hoc";

const OfflineShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.2727, 0) scale(1.0909)">
        <path d="M2 4H0V20C0 21.1 0.9 22 2 22H12V20H2V4Z" fill="currentColor" />
        <path
          d="M14 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H14C15.1 18 16 17.1 16 16V2C16 0.9 15.1 0 14 0ZM14 16H6V15H14V16ZM14 13H6V5H14V13ZM14 3H6V2H14V3Z"
          fill="currentColor"
        />
        <path
          d="M8.5 9.25H10.13L9.44 9.94L10.5 11L13 8.5L10.5 6L9.44 7.06L10.13 7.75H8C7.45 7.75 7 8.2 7 8.75V11H8.5V9.25Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OfflineShare;
