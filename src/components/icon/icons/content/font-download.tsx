import React from "react";
import { withIcon } from "../../hoc";

const FontDownload = withIcon(({ size }) => {
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
          d="M7.17 13.5H12.81L13.95 16.5H16.04L10.93 3.5H9.07L3.96 16.5H6.05L7.17 13.5ZM10 5.98L12.07 11.5H7.93L10 5.98ZM18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM18 18H2V2H18V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FontDownload;
