import React from "react";
import { withIcon } from "../../hoc";

const PlaylistPlay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.5263) scale(1.2632)">
        <path d="M11 4H0V6H11V4Z" fill="currentColor" />
        <path d="M11 0H0V2H11V0Z" fill="currentColor" />
        <path d="M7 8H0V10H7V8Z" fill="currentColor" />
        <path d="M13 7V15L19 11L13 7Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default PlaylistPlay;
