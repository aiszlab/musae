import React from "react";
import { withIcon } from "../../hoc";

const Biotech = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.1579, 0) scale(1.2632)">
        <path
          d="M2 17C0.9 17 0 17.9 0 19H14C14 17.9 13.1 17 12 17H8V15H11C12.1 15 13 14.1 13 13H5C3.34 13 2 11.66 2 10C2 8.91 2.59 7.96 3.47 7.43C3.88 8.02 4.53 8.43 5.3 8.49C6 8.55 6.66 8.3 7.15 7.87L7.74 9.48L8.68 9.14L9.02 10.08L10.9 9.4L10.56 8.46L11.5 8.12L8.76 0.6L7.82 0.94L7.48 0L5.6 0.68L5.94 1.62L5 1.97L5.56 3.52C4.39 3.48 3.37 4.27 3.08 5.38C1.27 6.14 0 7.92 0 10C0 12.76 2.24 15 5 15V17H2ZM7.86 2.52L9.57 7.22L8.63 7.56L6.92 2.86L7.86 2.52ZM5.5 5C6.05 5 6.5 5.45 6.5 6C6.5 6.55 6.05 7 5.5 7C4.95 7 4.5 6.55 4.5 6C4.5 5.45 4.95 5 5.5 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Biotech;
