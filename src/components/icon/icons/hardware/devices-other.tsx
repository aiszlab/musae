import React from "react";
import { withIcon } from "../../hoc";

const DevicesOther = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.2727) scale(1.0909)">
        <path
          d="M2 2H20V0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V14H2V2ZM12 8H8V9.78C7.39 10.33 7 11.11 7 12C7 12.89 7.39 13.67 8 14.22V16H12V14.22C12.61 13.67 13 12.88 13 12C13 11.12 12.61 10.33 12 9.78V8ZM10 13.5C9.17 13.5 8.5 12.83 8.5 12C8.5 11.17 9.17 10.5 10 10.5C10.83 10.5 11.5 11.17 11.5 12C11.5 12.83 10.83 13.5 10 13.5ZM21 4H15C14.5 4 14 4.5 14 5V15C14 15.5 14.5 16 15 16H21C21.5 16 22 15.5 22 15V5C22 4.5 21.5 4 21 4ZM20 14H16V6H20V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DevicesOther;
