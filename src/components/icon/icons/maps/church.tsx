import React from "react";
import { withIcon } from "../../hoc";

const Church = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5714, 0) scale(1.1429)">
        <path
          d="M16 11.22V8L11 5.5V4H13V2H11V0H9V2H7V4H9V5.5L4 8V11.22L0 13V21H9V17C9 16.45 9.45 16 10 16C10.55 16 11 16.45 11 17V21H20V13L16 11.22ZM18 19H13V16.96C13 15.27 11.65 13.9 10 13.9C8.35 13.9 7 15.27 7 16.96V19H2V14.21L6 12.4V9.05L10 7L14 9.04V12.39L18 14.2V19Z"
          fill="currentColor"
        />
        <path
          d="M10 12.5C10.8284 12.5 11.5 11.8284 11.5 11C11.5 10.1716 10.8284 9.5 10 9.5C9.17157 9.5 8.5 10.1716 8.5 11C8.5 11.8284 9.17157 12.5 10 12.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Church;
