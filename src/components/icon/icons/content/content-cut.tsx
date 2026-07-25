import React from "react";
import { withIcon } from "../../hoc";

const ContentCut = withIcon(({ size }) => {
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
          d="M7.64 5.64C7.87 5.14 8 4.59 8 4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8C4.59 8 5.14 7.87 5.64 7.64L8 10L5.64 12.36C5.14 12.13 4.59 12 4 12C1.79 12 0 13.79 0 16C0 18.21 1.79 20 4 20C6.21 20 8 18.21 8 16C8 15.41 7.87 14.86 7.64 14.36L10 12L17 19H20V18L7.64 5.64ZM4 6C2.9 6 2 5.11 2 4C2 2.89 2.9 2 4 2C5.1 2 6 2.89 6 4C6 5.11 5.1 6 4 6ZM4 18C2.9 18 2 17.11 2 16C2 14.89 2.9 14 4 14C5.1 14 6 14.89 6 16C6 17.11 5.1 18 4 18ZM10 10.5C9.72 10.5 9.5 10.28 9.5 10C9.5 9.72 9.72 9.5 10 9.5C10.28 9.5 10.5 9.72 10.5 10C10.5 10.28 10.28 10.5 10 10.5ZM17 1L11 7L13 9L20 2V1H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContentCut;
