import React from "react";
import { withIcon } from "../../hoc";

const VideogameAsset = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.4545) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H20C21.1 12 22 11.1 22 10V2C22 0.9 21.1 0 20 0ZM20 10H2V2H20V10ZM5 9H7V7H9V5H7V3H5V5H3V7H5V9Z"
          fill="currentColor"
        />
        <path
          d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z"
          fill="currentColor"
        />
        <path
          d="M17.5 6C18.3284 6 19 5.32843 19 4.5C19 3.67157 18.3284 3 17.5 3C16.6716 3 16 3.67157 16 4.5C16 5.32843 16.6716 6 17.5 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideogameAsset;
