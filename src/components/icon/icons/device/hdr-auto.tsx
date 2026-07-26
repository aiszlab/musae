import React from "react";
import { withIcon } from "../../hoc";

const IconHdrAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11.01 6L6.88 17H8.78L9.78 14.19H14.22L15.21 17H17.11L12.98 6H11.01ZM10.35 12.59L11.95 8.04H12.04L13.64 12.59H10.35Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHdrAuto;
