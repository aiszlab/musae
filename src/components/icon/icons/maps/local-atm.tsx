import React from "react";
import { withIcon } from "../../hoc";

const LocalAtm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M9 13H11V12H12C12.55 12 13 11.55 13 11V8C13 7.45 12.55 7 12 7H9V6H13V4H11V3H9V4H8C7.45 4 7 4.45 7 5V8C7 8.55 7.45 9 8 9H11V10H7V12H9V13ZM18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalAtm;
