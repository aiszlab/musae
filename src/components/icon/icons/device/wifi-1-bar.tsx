import React from "react";
import { withIcon } from "../../hoc";

const Wifi1Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5014) scale(3.3994)">
        <path
          d="M7.06 1.46L3.53 5L0 1.46C0.9 0.559999 2.15 0 3.53 0C4.91 0 6.16 0.559999 7.06 1.46Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Wifi1Bar;
