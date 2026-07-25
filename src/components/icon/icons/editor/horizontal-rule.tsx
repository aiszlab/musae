import React from "react";
import { withIcon } from "../../hoc";

const HorizontalRule = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 10.5) scale(1.5)">
        <path d="M16 0H0V2H16V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default HorizontalRule;
