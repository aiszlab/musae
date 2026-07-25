import React from "react";
import { withIcon } from "../../hoc";

const Discount = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.604, 0) scale(1.0437)">
        <path
          d="M9.79 21L0 11.21V13.21C0 13.74 0.21 14.25 0.59 14.62L8.38 22.41C9.16 23.19 10.43 23.19 11.21 22.41L17.42 16.2C18.2 15.42 18.2 14.15 17.42 13.37L9.79 21Z"
          fill="currentColor"
        />
        <path
          d="M8.38 17.41C8.77 17.8 9.28 18 9.79 18C10.3 18 10.81 17.8 11.2 17.41L17.41 11.2C18.19 10.42 18.19 9.15 17.41 8.37L9.62 0.58C9.25 0.21 8.74 0 8.21 0H2C0.9 0 0 0.9 0 2V8.21C0 8.74 0.21 9.25 0.59 9.62L8.38 17.41ZM2 2H8.21L16 9.79L9.79 16L2 8.21V2Z"
          fill="currentColor"
        />
        <path
          d="M4.25 5.5C4.94036 5.5 5.5 4.94036 5.5 4.25C5.5 3.55964 4.94036 3 4.25 3C3.55964 3 3 3.55964 3 4.25C3 4.94036 3.55964 5.5 4.25 5.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Discount;
