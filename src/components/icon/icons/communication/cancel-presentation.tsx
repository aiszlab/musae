import React from "react";
import { withIcon } from "../../hoc";

const CancelPresentation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H2V2H20V16ZM8.41 12.95L11 10.36L13.59 12.95L15 11.54L12.41 8.95L15 6.36L13.59 4.95L11 7.54L8.41 4.95L7 6.36L9.59 8.95L7 11.54L8.41 12.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CancelPresentation;
