import React from "react";
import { withIcon } from "../../hoc";

const IconApproval = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 16V22H20V16C20 14.9 19.1 14 18 14H6C4.9 14 4 14.9 4 16ZM18 18H6V16H18V18ZM12 2C9.24 2 7 4.24 7 7L12 14L17 7C17 4.24 14.76 2 12 2ZM12 11L9 7C9 5.34 10.34 4 12 4C13.66 4 15 5.34 15 7L12 11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconApproval;
