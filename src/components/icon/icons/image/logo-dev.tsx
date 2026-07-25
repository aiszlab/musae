import React from "react";
import { withIcon } from "../../hoc";

const LogoDev = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM4.68 11.98H3V6H4.71C5.99 6 6.42 7.03 6.42 7.71V10.27C6.42 10.95 6 11.98 4.68 11.98ZM9.38 8.46V9.53H8.2V10.92H10.13V11.99H7.88C7.48 12 7.14 11.68 7.13 11.28V6.75C7.12 6.35 7.44 6.01 7.84 6H10.12V7.07H8.2V8.46H9.38ZM13.88 11.23C13.4 12.34 12.55 12.12 12.17 11.23L10.77 6H11.95L13.02 10.11L14.09 6H15.27L13.88 11.23Z"
          fill="currentColor"
        />
        <path
          d="M4.77 7.12H4.14V10.89H4.77C4.91 10.89 5.05 10.84 5.19 10.73C5.33 10.63 5.4 10.47 5.4 10.26V7.74C5.4 7.53 5.33 7.37 5.19 7.27C5.05 7.17 4.91 7.12 4.77 7.12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LogoDev;
