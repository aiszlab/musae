import React from "react";
import { withIcon } from "../../hoc";

const DataArray = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path d="M11 0V2H14V14H11V16H16V0H11Z" fill="currentColor" />
        <path d="M0 16H5V14H2V2H5V0H0V16Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DataArray;
