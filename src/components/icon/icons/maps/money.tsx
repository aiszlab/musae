import React from "react";
import { withIcon } from "../../hoc";

const Money = withIcon(({ size }) => {
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
          d="M13 12H16C16.55 12 17 11.55 17 11V5C17 4.45 16.55 4 16 4H13C12.45 4 12 4.45 12 5V11C12 11.55 12.45 12 13 12ZM14 6H15V10H14V6ZM7 12H10C10.55 12 11 11.55 11 11V5C11 4.45 10.55 4 10 4H7C6.45 4 6 4.45 6 5V11C6 11.55 6.45 12 7 12ZM8 6H9V10H8V6ZM3 4H5V12H3V4ZM0 0V16H20V0H0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Money;
