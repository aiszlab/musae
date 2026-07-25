import React from "react";
import { withIcon } from "../../hoc";

const Streetview = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M9.56 13.33C9.22 13.6 9 14.03 9 14.5V20H16C17.1 20 18 19.1 18 18V12.02C17.06 11.69 16.05 11.5 15 11.5C12.97 11.5 11.07 12.2 9.56 13.33Z"
          fill="currentColor"
        />
        <path
          d="M15 10C17.7614 10 20 7.76142 20 5C20 2.23858 17.7614 0 15 0C12.2386 0 10 2.23858 10 5C10 7.76142 12.2386 10 15 10Z"
          fill="currentColor"
        />
        <path
          d="M8.5 5C8.5 3.92 8.77 2.9 9.24 2H2C0.9 2 0 2.9 0 4V18C0 18.55 0.23 19.05 0.59 19.41L10.41 9.59C9.23 8.42 8.5 6.8 8.5 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Streetview;
