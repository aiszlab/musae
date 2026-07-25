import React from "react";
import { withIcon } from "../../hoc";

const FastForward = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.25 9.86L17.28 12L14.25 14.14V9.86ZM5.25 9.86L8.28 12L5.25 14.14V9.86ZM12.25 6V18L20.75 12L12.25 6ZM3.25 6V18L11.75 12L3.25 6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FastForward;
