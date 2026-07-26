import React from "react";
import { withIcon } from "../../hoc";

const IconMoving = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 8.904 V 12 H 24 V 4.8 H 16.8 V 7.2 H 19.896 L 14.544 12.552 C 14.076 13.02 13.32 13.02 12.852 12.552 L 11.448 11.148 C 10.044 9.744 7.764 9.744 6.36 11.148 L 0 17.508 L 1.692 19.2 L 8.04 12.852 C 8.508 12.384 9.264 12.384 9.732 12.852 L 11.136 14.256 C 12.54 15.66 14.82 15.66 16.224 14.256 L 21.6 8.904Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMoving;
