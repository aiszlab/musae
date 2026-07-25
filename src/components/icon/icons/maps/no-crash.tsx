import React from "react";
import { withIcon } from "../../hoc";

const NoCrash = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3, 0) scale(1)">
        <path
          d="M15.92 9.01C15.72 8.42 15.16 8 14.5 8H3.5C2.84 8 2.29 8.42 2.08 9.01L0 15V23C0 23.55 0.45 24 1 24H2C2.55 24 3 23.55 3 23V22H15V23C15 23.55 15.45 24 16 24H17C17.55 24 18 23.55 18 23V15L15.92 9.01ZM3.85 10H14.14L15.18 13H2.81L3.85 10ZM16 20H2V15H16V20ZM3 17.5C3 16.67 3.67 16 4.5 16C5.33 16 6 16.67 6 17.5C6 18.33 5.33 19 4.5 19C3.67 19 3 18.33 3 17.5ZM12 17.5C12 16.67 12.67 16 13.5 16C14.33 16 15 16.67 15 17.5C15 18.33 14.33 19 13.5 19C12.67 19 12 18.33 12 17.5ZM9 6.36L6.17 3.54L7.58 2.13L9 3.54L12.54 0L13.95 1.41L9 6.36Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NoCrash;
