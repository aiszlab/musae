import React from "react";
import { withIcon } from "../../hoc";

const OilBarrel = withIcon(({ size }) => {
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
          d="M6 10.05C6 11.68 7.34 13 9 13C10.66 13 12 11.68 12 10.05C12 8.74 11.47 8.36 9 5.5C6.52 8.38 6 8.75 6 10.05Z"
          fill="currentColor"
        />
        <path
          d="M17 10C17.55 10 18 9.55 18 9C18 8.45 17.55 8 17 8H16V2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1C0 1.55 0.45 2 1 2H2V8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H2V16H1C0.45 16 0 16.45 0 17C0 17.55 0.45 18 1 18H17C17.55 18 18 17.55 18 17C18 16.45 17.55 16 17 16H16V10H17ZM14 16H4V10C4.55 10 5 9.55 5 9C5 8.45 4.55 8 4 8V2H14V8C13.45 8 13 8.45 13 9C13 9.55 13.45 10 14 10V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OilBarrel;
