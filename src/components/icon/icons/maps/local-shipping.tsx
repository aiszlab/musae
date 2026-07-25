import React from "react";
import { withIcon } from "../../hoc";

const LocalShipping = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.2727) scale(1.0909)">
        <path
          d="M19 4H16V0H2C0.9 0 0 0.9 0 2V13H2C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H22V8L19 4ZM18.5 5.5L20.46 8H16V5.5H18.5ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM7.22 11C6.67 10.39 5.89 10 5 10C4.11 10 3.33 10.39 2.78 11H2V2H14V11H7.22ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalShipping;
