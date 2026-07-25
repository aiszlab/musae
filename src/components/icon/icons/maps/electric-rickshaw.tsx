import React from "react";
import { withIcon } from "../../hoc";

const ElectricRickshaw = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.0959) scale(1.0904)">
        <path
          d="M20 8.18V6.72C20 6.25 19.84 5.8 19.54 5.44L15.6 0.72C15.22 0.26 14.66 0 14.06 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H2.18C2.6 13.16 3.7 14 5 14C6.3 14 7.4 13.16 7.82 12H16.19C16.6 13.16 17.7 14 19.01 14C20.67 14 22.01 12.66 22.01 11C22 9.7 21.16 8.6 20 8.18ZM5 12C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12ZM6 8.17C5.69 8.06 5.35 8 5 8C3.7 8 2.58 8.84 2.17 10H2V7H6V8.17ZM6 5H2V2H6V5ZM13 10H8V7H11V5H8V2H13V10ZM15 3.12L17.4 6H15V3.12ZM16.17 10H15V8H18V8.17C17.15 8.47 16.47 9.15 16.17 10ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12Z"
          fill="currentColor"
        />
        <path d="M6 17H10V15L16 18H12V20L6 17Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ElectricRickshaw;
