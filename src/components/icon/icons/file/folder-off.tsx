import React from "react";
import { withIcon } from "../../hoc";

const FolderOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0563) scale(1.1262)">
        <path
          d="M19.31 3.9H11.31L9.31 1.9H6.48L10.48 5.9H19.31V15.07L21.07 16.83C21.22 16.55 21.31 16.24 21.31 15.9V5.9C21.31 4.8 20.41 3.9 19.31 3.9Z"
          fill="currentColor"
        />
        <path
          d="M1.41 0L0 1.41L1.56 2.97C1.41 3.25 1.32 3.56 1.32 3.9L1.31 15.9C1.31 17 2.21 17.9 3.31 17.9H16.48L19.79 21.21L21.2 19.8L1.41 0ZM3.31 15.9V4.73L14.48 15.9H3.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FolderOff;
