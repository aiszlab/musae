import React from "react";
import { withIcon } from "../../hoc";

const KeyOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6748) scale(1.0435)">
        <path
          d="M9.7 10.72L7.99 9.01C8 9.07 8 9.13 8 9.19C8 10.29 7.1 11.19 6 11.19C4.9 11.19 4 10.29 4 9.19C4 8.09 4.9 7.19 6 7.19C6.06 7.19 6.12 7.19 6.18 7.2L4.47 5.49C3.02 6.09 2 7.52 2 9.19C2 11.4 3.79 13.19 6 13.19C7.67 13.19 9.1 12.17 9.7 10.72ZM11.19 12.21C10.15 13.99 8.21 15.19 6 15.19C2.69 15.19 0 12.5 0 9.19C0 6.98 1.2 5.04 2.98 4L0.39 1.41L1.8 0L20.18 18.38L18.77 19.79L11.19 12.21ZM15.26 10.62L16.5 9.69L18.31 11.05L20.17 9.19L19.17 8.19H12.83L10.83 6.19H20L23 9.19L18.5 13.69L17.81 13.18L15.26 10.62Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyOff;
