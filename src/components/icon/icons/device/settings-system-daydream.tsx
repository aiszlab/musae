import React from "react";
import { withIcon } from "../../hoc";

const SettingsSystemDaydream = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M14.5 14H8C5.79 14 4 12.21 4 10C4 8.07 5.36 6.44 7.22 6.08C8.04 4.8 9.47 4 11 4C12.95 4 14.66 5.28 15.26 7.09C16.84 7.45 18 8.84 18 10.5C18 12.43 16.43 14 14.5 14ZM7.74 8.02C6.74 8.15 6 8.99 6 10C6 11.1 6.9 12 8 12H14.5C15.33 12 16 11.33 16 10.5C16 9.67 15.33 9 14.5 9H13.63L13.46 8.14C13.29 6.92 12.23 6 11 6C10.04 6 9.16 6.57 8.74 7.45L8.47 8.02H7.74ZM20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16.01H2V1.99H20V16.01Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SettingsSystemDaydream;
