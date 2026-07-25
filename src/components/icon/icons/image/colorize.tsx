import React from "react";
import { withIcon } from "../../hoc";

const Colorize = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3332)">
        <path
          d="M14.66 2.41L15.58 3.33L12.89 6.02L11.97 5.1L14.66 2.41ZM14.67 0C14.41 0 14.16 0.1 13.96 0.29L10.84 3.41L8.91 1.5L7.5 2.91L8.92 4.33L0 13.25V18H4.75L13.67 9.08L15.09 10.5L16.5 9.09L14.58 7.17L17.7 4.05C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.1 14.92 0 14.67 0ZM3.92 16L2 14.08L10.06 6.02L11.98 7.94L3.92 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Colorize;
