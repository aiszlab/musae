import React from "react";
import { withIcon } from "../../hoc";

const Title = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.8, 0) scale(1.6)">
        <path d="M0 0V3H5.5V15H8.5V3H14V0H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Title;
