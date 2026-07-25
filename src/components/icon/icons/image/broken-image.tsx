import React from "react";
import { withIcon } from "../../hoc";

const BrokenImage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V11.42L2.99 12.41L6.99 8.41L10.99 12.41L14.99 8.42L16 9.43V16ZM16 6.59L14.99 5.58L10.99 9.59L6.99 5.59L2.99 9.59L2 8.59V2H16V6.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BrokenImage;
