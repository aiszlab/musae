import React from "react";
import { withIcon } from "../../hoc";

const ReplayCircleFilled = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 16.5C6.69 16.5 4 13.81 4 10.5H6C6 12.71 7.79 14.5 10 14.5C12.21 14.5 14 12.71 14 10.5C14 8.26 12.15 6.41 9.84 6.51L11.41 8.08L10 9.5L6 5.5L10 1.5L11.41 2.91L9.81 4.51C13.28 4.4 16 7.18 16 10.5C16 13.81 13.31 16.5 10 16.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ReplayCircleFilled;
