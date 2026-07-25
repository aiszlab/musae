import React from "react";
import { withIcon } from "../../hoc";

const CopyAll = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8, 0) scale(1.2)">
        <path
          d="M15 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H15C16.1 16 17 15.1 17 14V2C17 0.9 16.1 0 15 0ZM15 14H6V2H15V14ZM0 13V11H2V13H0ZM0 7.5H2V9.5H0V7.5ZM7 18H9V20H7V18ZM0 16.5V14.5H2V16.5H0ZM2 20C0.9 20 0 19.1 0 18H2V20ZM5.5 20H3.5V18H5.5V20ZM10.5 20V18H12.5C12.5 19.1 11.6 20 10.5 20ZM2 4V6H0C0 4.9 0.9 4 2 4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CopyAll;
