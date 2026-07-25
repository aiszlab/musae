import React from "react";
import { withIcon } from "../../hoc";

const RuleFolder = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M5.83 12L3 9.17L4.41 7.76L5.82 9.17L9.36 5.63L10.77 7.04L5.83 12ZM15.41 9L17 10.59L15.59 12L14 10.41L12.41 12L11 10.59L12.59 9L11 7.41L12.41 6L14 7.59L15.59 6L17 7.41L15.41 9ZM18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RuleFolder;
