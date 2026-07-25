import React from "react";
import { withIcon } from "../../hoc";

const ElectricalServices = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M18 10C18 9.45 17.55 9 17 9H15V11H17C17.55 11 18 10.55 18 10Z"
          fill="currentColor"
        />
        <path
          d="M17 13H15V15H17C17.55 15 18 14.55 18 14C18 13.45 17.55 13 17 13Z"
          fill="currentColor"
        />
        <path d="M9 10H7V14H9C9 15.1 9.9 16 11 16H14V8H11C9.9 8 9 8.9 9 10Z" fill="currentColor" />
        <path
          d="M2 9C2 7.9 2.9 7 4 7H5.5C7.43 7 9 5.43 9 3.5C9 1.57 7.43 0 5.5 0H2C1.45 0 1 0.45 1 1C1 1.55 1.45 2 2 2H5.5C6.33 2 7 2.67 7 3.5C7 4.33 6.33 5 5.5 5H4C1.79 5 0 6.79 0 9C0 11.21 1.79 13 4 13H6V11H4C2.9 11 2 10.1 2 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ElectricalServices;
