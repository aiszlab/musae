import React from "react";
import { withIcon } from "../../hoc";

const ReadMore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(1.2)">
        <path d="M20 0H11V2H20V0Z" fill="currentColor" />
        <path d="M20 8H11V10H20V8Z" fill="currentColor" />
        <path d="M20 4H14V6H20V4Z" fill="currentColor" />
        <path d="M11 5L6 0V4H0V6H6V10L11 5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ReadMore;
