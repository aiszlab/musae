import React from "react";
import { withIcon } from "../../hoc";

const PanoramaVertical = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.394, 0) scale(1.2)">
        <path
          d="M15.94 19.12C14.84 16.18 14.3 13.09 14.3 10C14.3 6.91 14.85 3.82 15.94 0.88C15.98 0.77 16 0.66 16 0.57C16 0.23 15.77 0 15.37 0H0.63C0.23 0 0 0.23 0 0.57C0 0.67 0.0199999 0.77 0.0599999 0.88C1.16 3.82 1.71 6.91 1.71 10C1.71 13.09 1.16 16.18 0.0700002 19.12C0.0200002 19.23 0 19.34 0 19.43C0 19.76 0.23 20 0.63 20H15.38C15.77 20 16.01 19.76 16.01 19.43C16 19.33 15.98 19.23 15.94 19.12ZM2.54 18C3.31 15.4 3.7 12.72 3.7 10C3.7 7.28 3.31 4.6 2.54 2H13.45C12.68 4.6 12.29 7.28 12.29 10C12.29 12.72 12.68 15.4 13.45 18H2.54Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaVertical;
