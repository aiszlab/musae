import React from "react";
import { withIcon } from "../../hoc";

const FileCopy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.6364, 0) scale(1.0909)">
        <path
          d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM13 4H6C4.9 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 5.99 22H17C18.1 22 19 21.1 19 20V10L13 4ZM6 20V6H12V11H17V20H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FileCopy;
