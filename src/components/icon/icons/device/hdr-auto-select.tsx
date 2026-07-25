import React from "react";
import { withIcon } from "../../hoc";

const HdrAutoSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1)">
        <path
          d="M10 14H6.5V20H10C10.8 20 11.5 19.3 11.5 18.5V15.5C11.5 14.7 10.8 14 10 14ZM10 18.5H8V15.5H10V18.5Z"
          fill="currentColor"
        />
        <path d="M3.5 16H1.5V14H0V20H1.5V17.5H3.5V20H5V14H3.5V16Z" fill="currentColor" />
        <path d="M22 16.5V14.5H20.5V16.5H18.5V18H20.5V20H22V18H24V16.5H22Z" fill="currentColor" />
        <path
          d="M16.5 14H13V20H14.5V18H15.6L16.5 20H18L17.1 17.9C17.6 17.6 18 17.1 18 16.5V15.5C18 14.7 17.3 14 16.5 14ZM16.5 16.5H14.5V15.5H16.5V16.5Z"
          fill="currentColor"
        />
        <path d="M11.97 3.3L10.95 6.19H13.05L12.03 3.3H11.97Z" fill="currentColor" />
        <path
          d="M12 0C8.69 0 6 2.69 6 6C6 9.31 8.69 12 12 12C15.31 12 18 9.31 18 6C18 2.69 15.31 0 12 0ZM14.04 9L13.41 7.21H10.58L9.96 9H8.74L11.37 2H12.62L15.25 9H14.04Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrAutoSelect;
