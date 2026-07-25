import React from "react";
import { withIcon } from "../../hoc";

const Lan = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M10 20H18V13H15V9H10V7H13V0H5V7H8V9H3V13H0V20H8V13H5V11H13V13H10V20ZM7 5V2H11V5H7ZM6 15V18H2V15H6ZM16 15V18H12V15H16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Lan;
