import React from "react";
import { withIcon } from "../../hoc";

const CameraRoll = withIcon(({ size }) => {
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
          d="M12 4C12 2.9 11.1 2 10 2H9V1C9 0.45 8.55 0 8 0H4C3.45 0 3 0.45 3 1V2H2C0.9 2 0 2.9 0 4V19C0 20.1 0.9 21 2 21H10C11.1 21 12 20.1 12 19H20V4H12ZM18 17H10V19H2V4H5V2H7V4H10V6H18V17ZM7 14H9V16H7V14ZM7 7H9V9H7V7ZM11 14H13V16H11V14ZM11 7H13V9H11V7ZM15 14H17V16H15V14ZM15 7H17V9H15V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CameraRoll;
