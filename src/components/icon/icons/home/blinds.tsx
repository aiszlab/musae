import React from "react";
import { withIcon } from "../../hoc";

const Blinds = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 16V0H2V16H0V18H20V16H18ZM14 6H16V8H14V6ZM12 8H4V6H12V8ZM16 4H14V2H16V4ZM12 2V4H4V2H12ZM4 16V10H12V11.82C11.55 12.14 11.25 12.66 11.25 13.25C11.25 14.22 12.03 15 13 15C13.97 15 14.75 14.22 14.75 13.25C14.75 12.66 14.45 12.13 14 11.82V10H16V16H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Blinds;
