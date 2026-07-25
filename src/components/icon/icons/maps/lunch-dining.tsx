import React from "react";
import { withIcon } from "../../hoc";

const LunchDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2001) scale(1.2)">
        <path
          d="M0 16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V13H0V16ZM2 15H18V16H2V15Z"
          fill="currentColor"
        />
        <path
          d="M16.66 8.5C14.71 8.5 14.57 9.5 13.33 9.5C12.14 9.5 11.91 8.5 10 8.5C8.05 8.5 7.91 9.5 6.67 9.5C5.48 9.5 5.25 8.5 3.34 8.5C1.39 8.5 1.25 9.5 0.00999999 9.5V11.5C1.91 11.5 2.18 10.5 3.36 10.5C4.55 10.5 4.78 11.5 6.69 11.5C8.64 11.5 8.78 10.5 10.02 10.5C11.21 10.5 11.44 11.5 13.35 11.5C15.3 11.5 15.44 10.5 16.68 10.5C17.87 10.5 18.08 11.48 20 11.5L19.99 9.52C18.38 9.19 18.37 8.5 16.66 8.5Z"
          fill="currentColor"
        />
        <path
          d="M20 6C20.02 2 15.72 0 10 0C4.29 0 0 2 0 6V7H20V6ZM2.18 5C3.01 2.81 6.61 2 10 2C13.31 2 15.93 2.73 17.19 3.99C17.49 4.3 17.71 4.63 17.84 5H2.18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LunchDining;
