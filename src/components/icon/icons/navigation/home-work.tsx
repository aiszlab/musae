import React from "react";
import { withIcon } from "../../hoc";

const IconHomeWork = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1 11V21H7V16H9V21H15V11L8 6L1 11ZM13 19H11V14H5V19H3V12.03L8 8.46L13 12.03V19Z"
        fill="currentColor"
      />
      <path d="M19 7H17V9H19V7Z" fill="currentColor" />
      <path d="M19 11H17V13H19V11Z" fill="currentColor" />
      <path d="M19 15H17V17H19V15Z" fill="currentColor" />
      <path d="M10 3V4.97L12 6.4V5H21V19H17V21H23V3H10Z" fill="currentColor" />
    </svg>
  );
});

export default IconHomeWork;
