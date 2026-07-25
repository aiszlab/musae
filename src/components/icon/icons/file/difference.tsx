import React from "react";
import { withIcon } from "../../hoc";

const Difference = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.6364, 0) scale(1.0909)">
        <path
          d="M16 22H2C0.9 22 0 21.1 0 20V6H2V20H16V22ZM12.5 6V4H10.5V6H8.5V8H10.5V10H12.5V8H14.5V6H12.5ZM14.5 12H8.5V14H14.5V12ZM13 0H6C4.9 0 4.01 0.9 4.01 2L4 16C4 17.1 4.89 18 5.99 18H17C18.1 18 19 17.1 19 16V6L13 0ZM17 16H6V2H12.17L17 6.83V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Difference;
