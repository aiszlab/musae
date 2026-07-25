import React from "react";
import { withIcon } from "../../hoc";

const OneXMobiledata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.6)">
        <path
          d="M0 0H4V10H2V2H0V0ZM11.83 4.72L14.66 0H12.33L10.67 2.77L9 0H6.67L9.5 4.72L6.33 10H8.66L10.66 6.66L12.66 10H15L11.83 4.72Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OneXMobiledata;
