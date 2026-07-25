import React from "react";
import { withIcon } from "../../hoc";

const FolderShared = withIcon(({ size }) => {
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
          d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM13 9C14.1 9 15 8.1 15 7C15 5.9 14.1 5 13 5C11.9 5 11 5.9 11 7C11 8.1 11.9 9 13 9ZM9 13H17V12C17 10.67 14.33 10 13 10C11.67 10 9 10.67 9 12V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FolderShared;
