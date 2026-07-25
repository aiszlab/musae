import React from "react";
import { withIcon } from "../../hoc";

const OpenWith = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 8.5H14V5.5L19 10.5L14 15.5V12.5H10V15.5L5 10.5L10 5.5V8.5ZM5 13.5L10 18.5V15.5H14V18.5L19 13.5L14 8.5V11.5H10V8.5L5 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default OpenWith;
