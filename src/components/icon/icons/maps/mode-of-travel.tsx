import React from "react";
import { withIcon } from "../../hoc";

const ModeOfTravel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.3, 0) scale(1.2)">
        <path
          d="M11.31 16.9C10.35 17.9 9.25 18.93 8 20C2.67 15.45 0 11.52 0 8.2C0 3.22 3.8 0 8 0C12.19 0 15.99 3.21 16 8.17L18.09 6.08L19.5 7.5L15 12L10.5 7.5L11.91 6.09L14 8.17C13.99 4.55 11.34 2 8 2C4.65 2 2 4.57 2 8.2C2 10.54 3.95 13.64 8 17.34C8.64 16.75 9.23 16.18 9.77 15.63C9.6 15.29 9.5 14.91 9.5 14.51C9.5 13.13 10.62 12.01 12 12.01C13.38 12.01 14.5 13.13 14.5 14.51C14.5 15.89 13.38 17 12 17C11.76 17 11.53 16.97 11.31 16.9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ModeOfTravel;
