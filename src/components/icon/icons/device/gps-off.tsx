import React from "react";
import { withIcon } from "../../hoc";

const GpsOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M19.94 10C19.48 5.83 16.17 2.52 12 2.06V0H10V2.06C9.02 2.17 8.09 2.44 7.23 2.84L8.76 4.37C9.46 4.13 10.22 4 11 4C14.87 4 18 7.13 18 11C18 11.79 17.87 12.54 17.63 13.24L19.16 14.77C19.56 13.91 19.83 12.98 19.94 12H22V10H19.94ZM2 3.27L4.04 5.31C2.97 6.62 2.26 8.23 2.06 10H0V12H2.06C2.52 16.17 5.83 19.48 10 19.94V22H12V19.94C13.77 19.74 15.38 19.03 16.69 17.96L18.73 20L20.14 18.59L3.41 1.86L2 3.27ZM15.27 16.54C14.09 17.45 12.61 18 11 18C7.13 18 4 14.87 4 11C4 9.39 4.55 7.91 5.46 6.73L15.27 16.54Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GpsOff;
