import React from "react";
import { withIcon } from "../../hoc";

const IconImageAspectRatio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 8H14V10H16V8ZM16 12H14V14H16V12ZM8 8H6V10H8V8ZM12 8H10V10H12V8ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H4V4H20V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconImageAspectRatio;
