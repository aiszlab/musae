import React from "react";
import { withIcon } from "../../hoc";

const IconFort = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 3V5H19V3H17V5H15V3H13V7L15 9V10H9V9L11 7V3H9V5H7V3H5V5H3V3H1V7L3 9V15L1 17V21H10V18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18V21H23V17L21 15V9L23 7V3H21ZM21 19H16V18C16 15.79 14.21 14 12 14C9.79 14 8 15.79 8 18V19H3V17.83L5 15.83V8.17L3.83 7H8.17L7 8.17V12H17V8.17L15.83 7H20.17L19 8.17V15.83L21 17.83V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFort;
