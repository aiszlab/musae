import React from "react";
import { withIcon } from "../../hoc";

const IconGrid3X3 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 10V8H16V4H14V8H10V4H8V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20ZM14 14H10V10H14V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGrid3X3;
