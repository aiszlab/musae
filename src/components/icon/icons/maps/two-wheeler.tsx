import React from "react";
import { withIcon } from "../../hoc";

const TwoWheeler = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5) scale(1)">
        <path
          d="M4.17 6C4.12 6 4.06 6 4 6H4.17ZM13.41 0H9V2H12.59L14.59 4H11L7 6L5 4H0V6H4C1.79 6 0 7.79 0 10C0 12.21 1.79 14 4 14C6.21 14 8 12.21 8 10L10 12H13L16.49 5.9L17.5 6.91C16.59 7.64 16 8.75 16 10C16 12.21 17.79 14 20 14C22.21 14 24 12.21 24 10C24 7.79 22.21 6 20 6C19.82 6 19.64 6.03 19.47 6.05L17.41 4H20V1L16.28 2.86L13.41 0ZM20 12C18.9 12 18 11.1 18 10C18 8.9 18.9 8 20 8C21.1 8 22 8.9 22 10C22 11.1 21.1 12 20 12ZM4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10C6 11.1 5.1 12 4 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TwoWheeler;
