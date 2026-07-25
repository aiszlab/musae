import React from "react";
import { withIcon } from "../../hoc";

const PriorityHigh = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 22 C 13.228 22 14.222 21.006 14.222 19.778 C 14.222 18.55 13.228 17.556 12 17.556 C 10.772 17.556 9.778 18.55 9.778 19.778 C 9.778 21.006 10.772 22 12 22 Z"
        fill="currentColor"
      />
      <path
        d="M 9.778 2 L 14.222 2 L 14.222 15.333 L 9.778 15.333 L 9.778 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PriorityHigh;
