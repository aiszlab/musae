import React from "react";
import { withIcon } from "../../hoc";

const ArrowDropUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(2.4)">
        <path d="M0 5L5 0L10 5H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ArrowDropUp;
