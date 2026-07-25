import React from "react";
import { withIcon } from "../../hoc";

const ExposureNeg1 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6) scale(1.6)">
        <path d="M0 6V8H8V6H0ZM15 13H13V2.38L10 3.4V1.7L14.7 0H15V13Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ExposureNeg1;
