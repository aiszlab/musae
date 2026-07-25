import React from "react";
import { withIcon } from "../../hoc";

const DirectionsSubwayFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8947, 0) scale(1.2632)">
        <path
          d="M8 0C4 0 0 0.5 0 4V13.5C0 15.43 1.57 17 3.5 17L2 18V19H14V18L12.5 17C14.43 17 16 15.43 16 13.5V4C16 0.5 12.42 0 8 0ZM8 2C11.71 2 13.13 2.46 13.67 3H2.43C3.03 2.48 4.48 2 8 2ZM2 5H7V8H2V5ZM14 13.5C14 14.33 13.33 15 12.5 15H3.5C2.67 15 2 14.33 2 13.5V10H14V13.5ZM14 8H9V5H14V8Z"
          fill="currentColor"
        />
        <path
          d="M4.5 14C5.32843 14 6 13.3284 6 12.5C6 11.6716 5.32843 11 4.5 11C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14Z"
          fill="currentColor"
        />
        <path
          d="M11.5 14C12.3284 14 13 13.3284 13 12.5C13 11.6716 12.3284 11 11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DirectionsSubwayFilled;
