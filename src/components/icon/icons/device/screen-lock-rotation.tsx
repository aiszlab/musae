import React from "react";
import { withIcon } from "../../hoc";

const ScreenLockRotation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.1604, 0) scale(1.0435)">
        <path
          d="M22.25 12.77L19.68 10.2L18.27 11.61L20.49 13.83L14.83 19.49L3.51 8.17L9.17 2.51L11.27 4.61L12.68 3.2L10.23 0.75C9.64 0.16 8.69 0.16 8.11 0.75L1.75 7.11C1.16 7.7 1.16 8.65 1.75 9.23L13.77 21.25C14.36 21.84 15.31 21.84 15.89 21.25L22.25 14.89C22.84 14.3 22.84 13.35 22.25 12.77ZM7.47 20.48C4.2 18.94 1.86 15.76 1.5 12H0C0.51 18.16 5.66 23 11.95 23L12.61 22.97L8.8 19.15L7.47 20.48ZM15 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3V2.5C20 1.12 18.88 0 17.5 0C16.12 0 15 1.12 15 2.5V3C14.45 3 14 3.45 14 4V8C14 8.55 14.45 9 15 9ZM15.8 2.5C15.8 1.56 16.56 0.8 17.5 0.8C18.44 0.8 19.2 1.56 19.2 2.5V3H15.8V2.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenLockRotation;
