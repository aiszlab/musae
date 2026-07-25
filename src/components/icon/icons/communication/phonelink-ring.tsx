import React from "react";
import { withIcon } from "../../hoc";

const PhonelinkRing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.1045, 0) scale(1.0909)">
        <path
          d="M18.1 6.7L17.1 7.7C18.9 9.5 18.9 12.3 17.1 14.2L18.1 15.2C20.6 12.9 20.6 9.1 18.1 6.7ZM16 8.8L15 9.8C15.5 10.5 15.5 11.4 15 12.1L16 13.1C17.2 11.9 17.2 10.1 16 8.8ZM12 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0 12 0ZM12 19H2V3H12V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhonelinkRing;
