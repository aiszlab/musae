import React from "react";
import { withIcon } from "../../hoc";

const FiberDvr = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8) scale(1.3333)">
        <path
          d="M8.87 3.43L7.87 0H6.37L8.12 6H9.62L11.37 0H9.87L8.87 3.43ZM18 2.5V1.5C18 0.65 17.35 0 16.5 0H13V6H14.5V4H15.65L16.5 6H18L17.1 3.9C17.6 3.65 18 3.1 18 2.5ZM16.5 2.5H14.5V1.5H16.5V2.5ZM3.5 0H0V6H3.5C4.35 6 5 5.35 5 4.5V1.5C5 0.65 4.35 0 3.5 0ZM3.5 4.5H1.5V1.5H3.5V4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FiberDvr;
