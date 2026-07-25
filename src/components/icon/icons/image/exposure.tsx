import React from "react";
import { withIcon } from "../../hoc";

const Exposure = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM14.59 2L2 14.59V2H14.59ZM3.41 16L16 3.41V16H3.41ZM3 4H8V5.5H3V4ZM13 9.5H11.5V11.5H9.5V13H11.5V15H13V13H15V11.5H13V9.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Exposure;
