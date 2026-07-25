import React from "react";
import { withIcon } from "../../hoc";

const LocalHospital = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM7.5 14H10.5V10.5H14V7.5H10.5V4H7.5V7.5H4V10.5H7.5V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalHospital;
