import React from "react";
import { withIcon } from "../../hoc";

const Satellite = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM5.57 3H3V5.58C4.42 5.58 5.57 4.42 5.57 3ZM9 3H7.29C7.29 5.36 5.37 7.29 3 7.29V9C6.32 9 9 6.31 9 3ZM11.14 8.86L8.14 12.73L6 10.15L3 14H15L11.14 8.86Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Satellite;
