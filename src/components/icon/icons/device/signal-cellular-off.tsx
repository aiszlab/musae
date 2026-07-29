import React from "react";
import { withIcon } from "../../hoc";

const IconSignalCellularOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.43 1L13.12 9.31L21.43 17.61V1ZM5.33999 4.36L3.92999 5.77L10.29 12.14L1.42999 21H19.16L21.16 23L22.57 21.59L5.33999 4.36Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalCellularOff;
