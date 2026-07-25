import React from "react";
import { withIcon } from "../../hoc";

const FolderDelete = withIcon(({ size }) => {
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
          d="M14.5 6V5H12.5V6H10V7.5H11V11.5C11 12.33 11.67 13 12.5 13H14.5C15.33 13 16 12.33 16 11.5V7.5H17V6H14.5ZM14.5 11.5H12.5V7.5H14.5V11.5ZM18 2H10L8 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V4C20 2.89 19.11 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FolderDelete;
