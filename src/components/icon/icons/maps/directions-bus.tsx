import React from "react";
import { withIcon } from "../../hoc";

const DirectionsBus = withIcon(({ size }) => {
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
          d="M8 0C3.58 0 0 0.5 0 4V14C0 14.88 0.39 15.67 1 16.22V18C1 18.55 1.45 19 2 19H3C3.55 19 4 18.55 4 18V17H12V18C12 18.55 12.45 19 13 19H14C14.55 19 15 18.55 15 18V16.22C15.61 15.67 16 14.88 16 14V4C16 0.5 12.42 0 8 0ZM13.66 2.99H2.34C2.89 2.46 4.31 2 8 2C11.69 2 13.11 2.46 13.66 2.99ZM14 4.99V8H2V4.99H14ZM13.66 14.73L13.37 15H2.63L2.34 14.73C2.21 14.62 2 14.37 2 14V10H14V14C14 14.37 13.79 14.62 13.66 14.73Z"
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

export default DirectionsBus;
