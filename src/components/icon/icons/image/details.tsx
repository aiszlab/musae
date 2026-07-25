import React from "react";
import { withIcon } from "../../hoc";

const Details = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M10 0L0 18H20L10 0ZM11 5.92L16.6 16H11V5.92ZM9 5.92V16H3.4L9 5.92Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Details;
