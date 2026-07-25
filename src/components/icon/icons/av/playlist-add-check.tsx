import React from "react";
import { withIcon } from "../../hoc";

const PlaylistAddCheck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.7895) scale(1.2632)">
        <path d="M11 4H0V6H11V4Z" fill="currentColor" />
        <path d="M11 0H0V2H11V0Z" fill="currentColor" />
        <path d="M7 8H0V10H7V8Z" fill="currentColor" />
        <path
          d="M17.59 5.93L13.34 10.17L11.22 8.05L9.81 9.46L13.34 13L19 7.34L17.59 5.93Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlaylistAddCheck;
