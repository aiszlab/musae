import React from "react";
import { withIcon } from "../../hoc";

const FiberSmartRecord = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.2727) scale(1.0909)">
        <path
          d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM16 0.26V2.35C18.33 3.17 20 5.39 20 8C20 10.61 18.33 12.83 16 13.65V15.74C19.45 14.85 22 11.73 22 8C22 4.27 19.45 1.15 16 0.26Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FiberSmartRecord;
