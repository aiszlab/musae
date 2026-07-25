import React from "react";
import { withIcon } from "../../hoc";

const DirectionsBusFilled = withIcon(({ size }) => {
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
          d="M8 0C4 0 0 0.5 0 4V13.5C0 14.45 0.38 15.31 1 15.94V18C1 18.55 1.45 19 2 19H3C3.55 19 4 18.55 4 18V17H12V18C12 18.55 12.45 19 13 19H14C14.55 19 15 18.55 15 18V15.94C15.62 15.31 16 14.45 16 13.5V4C16 0.5 12.42 0 8 0ZM8 2C11.71 2 13.13 2.46 13.67 3H2.43C3.03 2.48 4.48 2 8 2ZM14 13C14 14.1 13.1 15 12 15H4C2.9 15 2 14.1 2 13V10H14V13ZM14 8H2V5H14V8Z"
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

export default DirectionsBusFilled;
