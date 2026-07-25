import React from "react";
import { withIcon } from "../../hoc";

const ImportExport = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M4 0L0 3.99H3V11H5V3.99H8L4 0ZM11 14.01V7H9V14.01H6L10 18L14 14.01H11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ImportExport;
