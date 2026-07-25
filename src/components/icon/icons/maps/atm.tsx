import React from "react";
import { withIcon } from "../../hoc";

const Atm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8.4) scale(1.2)">
        <path
          d="M6 0V1.5H8.25V6H9.75V1.5H12V0H6ZM4 0H1C0.45 0 0 0.45 0 1V6H1.5V4.5H3.5V6H5V1C5 0.45 4.55 0 4 0ZM3.5 3H1.5V1.5H3.5V3ZM19 0H14.5C13.95 0 13.5 0.45 13.5 1V6H15V1.5H16V5H17.5V1.49H18.5V6H20V1C20 0.45 19.55 0 19 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Atm;
