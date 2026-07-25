import React from "react";
import { withIcon } from "../../hoc";

const LocalDrink = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M0 0L2.01 18.23C2.13 19.23 2.97 20 4 20H14C15.03 20 15.87 19.23 15.99 18.23L18 0H0ZM14 18L4 18.01L2.89 8H15.1L14 18ZM15.33 6H2.67L2.23 2H15.76L15.33 6ZM9 17C10.66 17 12 15.66 12 14C12 12 9 8.6 9 8.6C9 8.6 6 12 6 14C6 15.66 7.34 17 9 17ZM9 11.91C9.59 12.82 10 13.64 10 14C10 14.55 9.55 15 9 15C8.45 15 8 14.55 8 14C8 13.63 8.41 12.81 9 11.91Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalDrink;
