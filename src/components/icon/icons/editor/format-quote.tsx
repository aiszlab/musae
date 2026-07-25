import React from "react";
import { withIcon } from "../../hoc";

const FormatQuote = withIcon(({ size }) => {
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
          d="M15.62 12H10.38L12.38 8H10V0H18V7.24L15.62 12ZM13.62 10H14.38L16 6.76V2H12V6H15.62L13.62 10ZM5.62 12H0.38L2.38 8H0V0H8V7.24L5.62 12ZM3.62 10H4.38L6 6.76V2H2V6H5.62L3.62 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatQuote;
