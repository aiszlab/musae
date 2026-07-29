import React from "react";
import { withIcon } from "../../hoc";

const IconKingBed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 12C22 10.9 21.1 10 20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12ZM18 10H13V7H18V10ZM6 7H11V10H6V7ZM4 12H20V15H4V12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconKingBed;
