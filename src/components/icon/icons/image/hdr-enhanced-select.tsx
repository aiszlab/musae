import React from "react";
import { withIcon } from "../../hoc";

const HdrEnhancedSelect = withIcon(({ size }) => {
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
          d="M12 0C15.31 0 18 2.69 18 6C18 9.31 15.31 12 12 12C8.69 12 6 9.31 6 6C6 2.69 8.69 0 12 0ZM12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2ZM13 9H11V7H9V5H11V3H13V5H15V7H13V9ZM24 18H22V20H20.5V18H18.5V16.5H20.5V14.5H22V16.5H24V18ZM18 16.5C18 17.1 17.6 17.6 17.1 17.9L18 20H16.5L15.6 18H14.5V20H13V14H16.5C17.3 14 18 14.7 18 15.5V16.5ZM16.5 16.5V15.5H14.5V16.5H16.5ZM3.5 16V14H5V20H3.5V17.5H1.5V20H0V14H1.5V16H3.5ZM10 14C10.8 14 11.5 14.7 11.5 15.5V18.5C11.5 19.3 10.8 20 10 20H6.5V14H10ZM10 18.5V15.5H8V18.5H10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrEnhancedSelect;
