import React from "react";
import { withIcon } from "../../hoc";

const HdrOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8) scale(1.3333)">
        <path
          d="M18 2.5V1.5C18 0.7 17.3 0 16.5 0H13V6H14.5V4H15.6L16.5 6H18L17.1 3.9C17.6 3.6 18 3.1 18 2.5ZM16.5 2.5H14.5V1.5H16.5V2.5ZM3.5 2H1.5V0H0V6H1.5V3.5H3.5V6H5V0H3.5V2ZM10 0H6.5V6H10C10.8 6 11.5 5.3 11.5 4.5V1.5C11.5 0.7 10.8 0 10 0ZM10 4.5H8V1.5H10V4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrOn;
