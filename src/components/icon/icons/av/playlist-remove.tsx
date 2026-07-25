import React from "react";
import { withIcon } from "../../hoc";

const PlaylistRemove = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M11 4H0V6H11V4ZM11 0H0V2H11V0ZM0 10H7V8H0V10ZM11.41 16L14 13.41L16.59 16L18 14.59L15.41 12L18 9.41L16.59 8L14 10.59L11.41 8L10 9.41L12.59 12L10 14.59L11.41 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlaylistRemove;
