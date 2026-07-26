import React from "react";
import { withIcon } from "../../hoc";

const IconBrightness2 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 4C11.41 4 15 7.59 15 12C15 16.41 11.41 20 7 20C6.66 20 6.32 19.98 5.99 19.93C7.9 17.77 9 14.95 9 12C9 9.05 7.9 6.23 5.99 4.07C6.32 4.02 6.66 4 7 4ZM7 2C5.18 2 3.47 2.5 2 3.35C4.99 5.08 7 8.3 7 12C7 15.7 4.99 18.92 2 20.65C3.47 21.5 5.18 22 7 22C12.52 22 17 17.52 17 12C17 6.48 12.52 2 7 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrightness2;
