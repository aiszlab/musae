import React from "react";
import { withIcon } from "../../hoc";

const Rotate90DegreesCcw = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0565, 0) scale(1.1299)">
        <path
          d="M6.48 5.65L0 12.14L6.49 18.62L12.98 12.14L6.48 5.65ZM2.83 12.14L6.49 8.48L10.14 12.14L6.48 15.8L2.83 12.14ZM18.5 5.88C16.75 4.12 14.44 3.24 12.14 3.24V0L7.9 4.24L12.14 8.48V5.24C13.93 5.24 15.72 5.92 17.09 7.29C19.82 10.02 19.82 14.46 17.09 17.19C15.72 18.56 13.93 19.24 12.14 19.24C11.17 19.24 10.2 19.03 9.3 18.63L7.81 20.12C9.16 20.86 10.65 21.24 12.14 21.24C14.44 21.24 16.75 20.36 18.5 18.6C22.02 15.09 22.02 9.39 18.5 5.88Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Rotate90DegreesCcw;
