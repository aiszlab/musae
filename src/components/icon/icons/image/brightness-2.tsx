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
        d="M9.5 4C13.91 4 17.5 7.59 17.5 12C17.5 16.41 13.91 20 9.5 20C9.16 20 8.82 19.98 8.49 19.93C10.4 17.77 11.5 14.95 11.5 12C11.5 9.05 10.4 6.23 8.49 4.07C8.82 4.02 9.16 4 9.5 4ZM9.5 2C7.68 2 5.97 2.5 4.5 3.35C7.49 5.08 9.5 8.3 9.5 12C9.5 15.7 7.49 18.92 4.5 20.65C5.97 21.5 7.68 22 9.5 22C15.02 22 19.5 17.52 19.5 12C19.5 6.48 15.02 2 9.5 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrightness2;
