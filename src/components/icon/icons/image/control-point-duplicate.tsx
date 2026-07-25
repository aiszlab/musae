import React from "react";
import { withIcon } from "../../hoc";

const ControlPointDuplicate = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3) scale(1)">
        <path
          d="M16 5H14V8H11V10H14V13H16V10H19V8H16V5ZM2 9C2 6.21 3.64 3.8 6.01 2.68V0.52C2.52 1.76 0 5.09 0 9C0 12.91 2.52 16.24 6.01 17.48V15.32C3.64 14.2 2 11.79 2 9ZM15 0C10.04 0 6 4.04 6 9C6 13.96 10.04 18 15 18C19.96 18 24 13.96 24 9C24 4.04 19.96 0 15 0ZM15 16C11.14 16 8 12.86 8 9C8 5.14 11.14 2 15 2C18.86 2 22 5.14 22 9C22 12.86 18.86 16 15 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ControlPointDuplicate;
