import React from "react";
import { withIcon } from "../../hoc";

const Crop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M16 14H18V6C18 4.9 17.1 4 16 4H8V6H16V14ZM6 16V0H4V4H0V6H4V16C4 17.1 4.9 18 6 18H16V22H18V18H22V16H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Crop;
