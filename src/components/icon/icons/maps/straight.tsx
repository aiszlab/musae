import React from "react";
import { withIcon } from "../../hoc";

const Straight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6.6667, 0) scale(1.3333)">
        <path d="M3 3.83L1.41 5.41L0 4L4 0L8 4L6.59 5.41L5 3.83V18H3V3.83Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Straight;
