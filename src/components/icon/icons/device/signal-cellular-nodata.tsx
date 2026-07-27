import React from "react";
import { withIcon } from "../../hoc";

const IconSignalCellularNodata = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 13H13V22H2L22 2V13ZM21 15.41L19.59 14L17.5 16.09L15.41 14L14 15.41L16.09 17.5L14 19.59L15.41 21L17.5 18.92L19.59 21L21 19.59L18.92 17.5L21 15.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalCellularNodata;
