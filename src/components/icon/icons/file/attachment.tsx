import React from "react";
import { withIcon } from "../../hoc";

const Attachment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(1.0909)">
        <path
          d="M17 9.5H5.5C3.29 9.5 1.5 7.71 1.5 5.5C1.5 3.29 3.29 1.5 5.5 1.5H18C19.38 1.5 20.5 2.62 20.5 4C20.5 5.38 19.38 6.5 18 6.5H7.5C6.95 6.5 6.5 6.05 6.5 5.5C6.5 4.95 6.95 4.5 7.5 4.5H17V3H7.5C6.12 3 5 4.12 5 5.5C5 6.88 6.12 8 7.5 8H18C20.21 8 22 6.21 22 4C22 1.79 20.21 0 18 0H5.5C2.46 0 0 2.46 0 5.5C0 8.54 2.46 11 5.5 11H17V9.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Attachment;
