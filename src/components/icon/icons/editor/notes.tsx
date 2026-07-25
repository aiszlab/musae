import React from "react";
import { withIcon } from "../../hoc";

const Notes = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.3333)">
        <path
          d="M18 5.01L0 5V7H18V5.01ZM0 10H12V12H0V10ZM18 0H0V2.01L18 2V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Notes;
