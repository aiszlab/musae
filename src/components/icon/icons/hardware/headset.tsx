import React from "react";
import { withIcon } from "../../hoc";

const Headset = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6316, 0) scale(1.2632)">
        <path
          d="M16 13V16C16 16.55 15.55 17 15 17H14V13H16ZM4 13V17H3C2.45 17 2 16.55 2 16V13H4ZM9 0C4.03 0 0 4.03 0 9V16C0 17.66 1.34 19 3 19H6V11H2V9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9V11H12V19H15C16.66 19 18 17.66 18 16V9C18 4.03 13.97 0 9 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Headset;
