import React from "react";
import { withIcon } from "../../hoc";

const DataObject = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M2 3V5C2 5.55 1.55 6 1 6H0V10H1C1.55 10 2 10.45 2 11V13C2 14.65 3.35 16 5 16H8V14H5C4.45 14 4 13.55 4 13V11C4 9.7 3.16 8.58 2 8.17V7.83C3.16 7.42 4 6.3 4 5V3C4 2.45 4.45 2 5 2H8V0H5C3.35 0 2 1.35 2 3Z"
          fill="currentColor"
        />
        <path
          d="M19 6C18.45 6 18 5.55 18 5V3C18 1.35 16.65 0 15 0H12V2H15C15.55 2 16 2.45 16 3V5C16 6.3 16.84 7.42 18 7.83V8.17C16.84 8.58 16 9.69 16 11V13C16 13.55 15.55 14 15 14H12V16H15C16.65 16 18 14.65 18 13V11C18 10.45 18.45 10 19 10H20V6H19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DataObject;
