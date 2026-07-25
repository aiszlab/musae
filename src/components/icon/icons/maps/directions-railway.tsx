import React from "react";
import { withIcon } from "../../hoc";

const DirectionsRailway = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M8 0C3.58 0 0 0.5 0 4V14.5C0 16.43 1.57 18 3.5 18L2 19.5V20H14V19.5L12.5 18C14.43 18 16 16.43 16 14.5V4C16 0.5 12.42 0 8 0ZM8 2C14 2 14 3.2 14 4H2C2 3.2 2 2 8 2ZM14 6V9H2V6H14ZM12.5 16H3.5C2.67 16 2 15.33 2 14.5V11H14V14.5C14 15.33 13.33 16 12.5 16ZM8 11.5C6.9 11.5 6 12.4 6 13.5C6 14.6 6.9 15.5 8 15.5C9.1 15.5 10 14.6 10 13.5C10 12.4 9.1 11.5 8 11.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DirectionsRailway;
