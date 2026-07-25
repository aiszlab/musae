import React from "react";
import { withIcon } from "../../hoc";

const Nightlife = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.4286) scale(1.1429)">
        <path
          d="M0 0H14L8 9V13H10V15H4V13H6V9L0 0ZM9.1 4L10.5 2H3.49L4.89 4H9.1ZM16 0H21V3H18V12C18 13.66 16.66 15 15 15C13.34 15 12 13.66 12 12C12 10.34 13.34 9 15 9C15.35 9 15.69 9.06 16 9.17V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Nightlife;
