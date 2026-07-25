import React from "react";
import { withIcon } from "../../hoc";

const PlaylistAddCircle = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM12 8H5V10H12V8ZM12 5H5V7H12V5ZM5 13H8V11H5V13ZM17 11V13H15V15H13V13H11V11H13V9H15V11H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PlaylistAddCircle;
