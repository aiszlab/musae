import React from "react";
import { withIcon } from "../../hoc";

const MonitorWeight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM9 3C7.34 3 6 4.34 6 6C6 7.66 7.34 9 9 9C10.66 9 12 7.66 12 6C12 4.34 10.66 3 9 3ZM8 6.5H7V5.5H8V6.5ZM9.5 6.5H8.5V5.5H9.5V6.5ZM11 6.5H10V5.5H11V6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MonitorWeight;
