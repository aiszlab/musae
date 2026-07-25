import React from "react";
import { withIcon } from "../../hoc";

const TenK = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 6V12V16H2V7.5H3V12H4.5V6H2V2H16V6Z"
          fill="currentColor"
        />
        <path
          d="M12.5 8.25V6H11V12H12.5V9.75L14.25 12H16L13.75 9L16 6H14.25L12.5 8.25Z"
          fill="currentColor"
        />
        <path
          d="M6.5 12H9C9.55 12 10 11.55 10 11V7C10 6.45 9.55 6 9 6H6.5C5.95 6 5.5 6.45 5.5 7V11C5.5 11.55 5.95 12 6.5 12ZM7 7.5H8.5V10.5H7V7.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TenK;
