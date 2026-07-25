import React from "react";
import { withIcon } from "../../hoc";

const DesktopAccessDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3549) scale(1.0439)">
        <path
          d="M1.41 0L0 1.41L1 2.4V14.31C1 15.41 1.89 16.31 2.99 16.31H10V18.31H8V20.31H16V18.31H14V16.31H14.9L20.9 22.31L22.31 20.9L1.41 0ZM2.99 14.31V4.4L12.9 14.31H2.99ZM4.55 0.31L6.55 2.31H21V14.31H18.55L20.55 16.31H20.99C22.09 16.31 22.99 15.41 22.99 14.31V2.31C22.99 1.21 22.09 0.31 20.99 0.31H4.55Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DesktopAccessDisabled;
