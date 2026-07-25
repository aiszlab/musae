import React from "react";
import { withIcon } from "../../hoc";

const HeadsetMic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1818, 0) scale(1.0909)">
        <path
          d="M16 13V17H14V13H16ZM4 13V17H3C2.45 17 2 16.55 2 16V13H4ZM9 0C4.03 0 0 4.03 0 9V16C0 17.66 1.34 19 3 19H6V11H2V9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9V11H12V19H16V20H9V22H15C16.66 22 18 20.66 18 19V9C18 4.03 13.97 0 9 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HeadsetMic;
