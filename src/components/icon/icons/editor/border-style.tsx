import React from "react";
import { withIcon } from "../../hoc";

const BorderStyle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M12 18H14V16H12V18ZM16 18H18V16H16V18ZM4 18H6V16H4V18ZM8 18H10V16H8V18ZM16 14H18V12H16V14ZM16 10H18V8H16V10ZM0 0V18H2V2H18V0H0ZM16 6H18V4H16V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderStyle;
