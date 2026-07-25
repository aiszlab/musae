import React from "react";
import { withIcon } from "../../hoc";

const StayCurrentPortrait = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3691, 0) scale(1.0909)">
        <path
          d="M11.99 0.00999999L1.99 0C0.89 0 0 0.9 0 2V20C0 21.1 0.89 22 1.99 22H11.99C13.09 22 13.99 21.1 13.99 20V2C13.99 0.9 13.09 0.00999999 11.99 0.00999999ZM11.99 18H1.99V4H11.99V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default StayCurrentPortrait;
