import React from "react";
import { withIcon } from "../../hoc";

const SpaceBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 7.5) scale(1.5)">
        <path d="M14 0V4H2V0H0V6H16V0H14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SpaceBar;
