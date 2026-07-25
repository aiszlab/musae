import React from "react";
import { withIcon } from "../../hoc";

const HeadphonesBattery = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.8) scale(1.2)">
        <path
          d="M19 1H18V0H16V1H15C14.45 1 14 1.45 14 2V11C14 11.55 14.45 12 15 12H19C19.55 12 20 11.55 20 11V2C20 1.45 19.55 1 19 1ZM18 10H16V3H18V10Z"
          fill="currentColor"
        />
        <path
          d="M6 0C2.69 0 0 2.69 0 6V10C0 11.1 0.9 12 2 12H4V7H1.5V6C1.5 3.52 3.52 1.5 6 1.5C8.48 1.5 10.5 3.52 10.5 6V7H8V12H10C11.1 12 12 11.1 12 10V6C12 2.69 9.31 0 6 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HeadphonesBattery;
