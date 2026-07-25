import React from "react";
import { withIcon } from "../../hoc";

const Brightness3 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.2, 0) scale(1.2)">
        <path
          d="M6.7 2.91C9.25 4.24 11 6.92 11 10C11 13.08 9.25 15.76 6.7 17.09C8.16 15.09 9 12.63 9 10C9 7.37 8.16 4.91 6.7 2.91ZM3 0C1.95 0 0.95 0.16 0 0.46C4.06 1.73 7 5.52 7 10C7 14.48 4.06 18.27 0 19.54C0.95 19.84 1.95 20 3 20C8.52 20 13 15.52 13 10C13 4.48 8.52 0 3 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Brightness3;
