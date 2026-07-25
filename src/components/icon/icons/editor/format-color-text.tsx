import React from "react";
import { withIcon } from "../../hoc";

const FormatColorText = withIcon(({ size }) => {
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
          d="M0 17H20V21H0V17ZM3.49 14H5.91L7.18 10.42H12.83L14.09 14H16.51L11.25 0H8.75L3.49 14ZM7.91 8.39L9.94 2.6H10.06L12.09 8.39H7.91Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatColorText;
