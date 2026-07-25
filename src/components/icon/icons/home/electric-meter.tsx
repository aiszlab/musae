import React from "react";
import { withIcon } from "../../hoc";

const ElectricMeter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M18 9C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9C0 12.92 2.51 16.24 6 17.48V20H8V17.94C8.33 17.98 8.66 18 9 18C9.34 18 9.67 17.98 10 17.94V20H12V17.48C15.49 16.24 18 12.92 18 9ZM9 16C5.14 16 2 12.86 2 9C2 5.14 5.14 2 9 2C12.86 2 16 5.14 16 9C16 12.86 12.86 16 9 16Z"
          fill="currentColor"
        />
        <path d="M13 5H5V7H13V5Z" fill="currentColor" />
        <path
          d="M9.75 8L6.75 11L8 12.25L6.75 13.5L8.25 15L11.25 12L10 10.75L11.25 9.5L9.75 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ElectricMeter;
