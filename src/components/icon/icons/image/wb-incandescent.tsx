import React from "react";
import { withIcon } from "../../hoc";

const WbIncandescent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5727) scale(1.0909)">
        <path
          d="M2.55 17.04L3.96 18.45L5.75 16.65L4.34 15.24L2.55 17.04ZM10 17.95H12V20.95H10V17.95ZM0 8.95H3V10.95H0V8.95ZM12 2V5.96L13 6.54C14.24 7.26 15 8.58 15 10C15 12.21 13.21 14 11 14C8.79 14 7 12.21 7 10C7 8.58 7.77 7.26 9 6.54L10 5.96V2H12ZM14 0H8V4.81C6.21 5.85 5 7.78 5 10C5 13.31 7.69 16 11 16C14.31 16 17 13.31 17 10C17 7.78 15.79 5.85 14 4.81V0ZM19 8.95H22V10.95H19V8.95ZM16.24 16.66L18.03 18.46L19.44 17.05L17.64 15.26L16.24 16.66Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WbIncandescent;
