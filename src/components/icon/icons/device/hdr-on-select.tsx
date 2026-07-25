import React from "react";
import { withIcon } from "../../hoc";

const HdrOnSelect = withIcon(({ size }) => {
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
          d="M18 16.5V15.5C18 14.7 17.3 14 16.5 14H13V20H14.5V18H15.6L16.5 20H18L17.1 17.9C17.6 17.6 18 17.1 18 16.5ZM16.5 16.5H14.5V15.5H16.5V16.5ZM3.5 16H1.5V14H0V20H1.5V17.5H3.5V20H5V14H3.5V16ZM10 14H6.5V20H10C10.8 20 11.5 19.3 11.5 18.5V15.5C11.5 14.7 10.8 14 10 14ZM10 18.5H8V15.5H10V18.5ZM24 18H22V20H20.5V18H18.5V16.5H20.5V14.5H22V16.5H24V18ZM12 2C14.21 2 16 3.79 16 6C16 8.21 14.21 10 12 10C9.79 10 8 8.21 8 6C8 3.79 9.79 2 12 2ZM12 0C8.69 0 6 2.69 6 6C6 9.31 8.69 12 12 12C15.31 12 18 9.31 18 6C18 2.69 15.31 0 12 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrOnSelect;
