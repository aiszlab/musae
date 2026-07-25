import React from "react";
import { withIcon } from "../../hoc";

const RollerShades = withIcon(({ size }) => {
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
          d="M18 16V0H2V16H0V18H20V16H18ZM16 2V8H4V2H16ZM4 16V10H9V11.82C8.55 12.14 8.25 12.66 8.25 13.25C8.25 14.22 9.03 15 10 15C10.97 15 11.75 14.22 11.75 13.25C11.75 12.66 11.45 12.13 11 11.82V10H16V16H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RollerShades;
