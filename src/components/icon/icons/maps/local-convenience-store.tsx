import React from "react";
import { withIcon } from "../../hoc";

const LocalConvenienceStore = withIcon(({ size }) => {
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
          d="M17 3V0H3V3H0V16H8V12H12V16H20V3H17ZM18 14H14V10H6V14H2V5H5V2H15V5H18V14ZM6 4H8V5H6V8H9V7H7V6H9V3H6V4ZM13 5H12V3H11V6H13V8H14V3H13V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalConvenienceStore;
