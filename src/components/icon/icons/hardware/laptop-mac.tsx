import React from "react";
import { withIcon } from "../../hoc";

const LaptopMac = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M20 15C21.1 15 21.99 14.1 21.99 13L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V13C2 14.1 2.9 15 4 15H0C0 16.1 0.9 17 2 17H22C23.1 17 24 16.1 24 15H20ZM4 2H20V13H4V2ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LaptopMac;
