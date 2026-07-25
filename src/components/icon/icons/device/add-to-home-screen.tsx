import React from "react";
import { withIcon } from "../../hoc";

const AddToHomeScreen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.7273, 0) scale(1.0909)">
        <path
          d="M15 0.00999999L5 0C3.9 0 3 0.9 3 2V5H5V4H15V18H5V17H3V20C3 21.1 3.9 22 5 22H15C16.1 22 17 21.1 17 20V2C17 0.9 16.1 0.00999999 15 0.00999999ZM7 14H9V7H2V9H5.59L0 14.59L1.41 16L7 10.41V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AddToHomeScreen;
