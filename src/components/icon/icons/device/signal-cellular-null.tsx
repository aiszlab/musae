import React from "react";
import { withIcon } from "../../hoc";

const IconSignalCellularNull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 6.83V20H6.83L20 6.83ZM22 2L2 22H22V2Z" fill="currentColor" />
    </svg>
  );
});

export default IconSignalCellularNull;
