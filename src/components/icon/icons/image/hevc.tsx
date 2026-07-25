import React from "react";
import { withIcon } from "../../hoc";

const Hevc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8) scale(1.3333)">
        <path d="M2.5 2H1.5V0H0V6H1.5V3.5H2.5V6H4V0H2.5V2Z" fill="currentColor" />
        <path
          d="M18 2V1C18 0.45 17.55 0 17 0H15C14.45 0 14 0.45 14 1V5C14 5.55 14.45 6 15 6H17C17.55 6 18 5.55 18 5V4H16.5V4.5H15.5V1.5H16.5V2H18Z"
          fill="currentColor"
        />
        <path d="M11.25 4.5L10.5 0H9L10 6H12.5L13.5 0H12L11.25 4.5Z" fill="currentColor" />
        <path d="M5 0V6H8.5V4.5H6.5V3.5H8.5V2H6.5V1.5H8.5V0H5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Hevc;
