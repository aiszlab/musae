import React from "react";
import { withIcon } from "../../hoc";

const PlaylistAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.1579) scale(1.2632)">
        <path
          d="M11 4H0V6H11V4ZM11 0H0V2H11V0ZM15 8V4H13V8H9V10H13V14H15V10H19V8H15ZM0 10H7V8H0V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlaylistAdd;
