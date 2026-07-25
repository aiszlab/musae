import React from "react";
import { withIcon } from "../../hoc";

const FormatShapes = withIcon(({ size }) => {
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
          d="M22 6V0H16V2H6V0H0V6H2V16H0V22H6V20H16V22H22V16H20V6H22ZM2 2H4V4H2V2ZM4 20H2V18H4V20ZM16 18H6V16H4V6H6V4H16V6H18V16H16V18ZM20 20H18V18H20V20ZM18 4V2H20V4H18ZM12.73 13H9.24L8.51 15H6.89L10.29 6H11.69L15.1 15H13.47L12.73 13ZM9.69 11.74H12.3L11 7.91L9.69 11.74Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatShapes;
