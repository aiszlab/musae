import React from "react";
import { withIcon } from "../../hoc";

const ArtTrack = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(1.2)">
        <path
          d="M20 6H12V4H20V6ZM20 0H12V2H20V0ZM12 10H20V8H12V10ZM10 2V8C10 9.1 9.1 10 8 10H2C0.9 10 0 9.1 0 8V2C0 0.9 0.9 0 2 0H8C9.1 0 10 0.9 10 2ZM8.5 8L6.25 5L4.5 7.26L3.25 5.75L1.5 8H8.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ArtTrack;
