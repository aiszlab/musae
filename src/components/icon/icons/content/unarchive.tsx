import React from "react";
import { withIcon } from "../../hoc";

const Unarchive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M17.54 2.23L16.15 0.55C15.88 0.21 15.47 0 15 0H3C2.53 0 2.12 0.21 1.84 0.55L0.46 2.23C0.17 2.57 0 3.02 0 3.5V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V3.5C18 3.02 17.83 2.57 17.54 2.23ZM3.24 2H14.76L15.59 3H2.42L3.24 2ZM2 16V5H16V16H2ZM5 11H7.55V14H10.45V11H13L9 7L5 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Unarchive;
