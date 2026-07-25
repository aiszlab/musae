import React from "react";
import { withIcon } from "../../hoc";

const MedicalServices = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 4H14V2C14 0.9 13.1 0 12 0H8C6.9 0 6 0.9 6 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM18 18H2V6H18V18Z"
          fill="currentColor"
        />
        <path d="M11 8H9V11H6V13H9V16H11V13H14V11H11V8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default MedicalServices;
