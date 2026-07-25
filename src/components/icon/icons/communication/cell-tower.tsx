import React from "react";
import { withIcon } from "../../hoc";

const CellTower = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.54) scale(1.2)">
        <path
          d="M5.3 11.8L6.5 10.6C5.5 9.6 5 8.3 5 7.1C5 5.8 5.5 4.5 6.5 3.6L5.3 2.4C4 3.7 3.3 5.4 3.3 7.1C3.3 8.8 4 10.5 5.3 11.8Z"
          fill="currentColor"
        />
        <path
          d="M17.1 0L15.9 1.2C17.5 2.8 18.3 5 18.3 7.1C18.3 9.2 17.5 11.4 15.9 13L17.1 14.2C19.1 12.2 20 9.7 20 7.1C20 4.5 19 2 17.1 0Z"
          fill="currentColor"
        />
        <path
          d="M4.1 1.2L2.9 0C1 2 0 4.5 0 7.1C0 9.7 1 12.2 2.9 14.2L4.1 13C2.5 11.4 1.7 9.2 1.7 7.1C1.7 5 2.5 2.8 4.1 1.2Z"
          fill="currentColor"
        />
        <path
          d="M14.7 11.8C16 10.5 16.7 8.8 16.7 7.1C16.6 5.4 16 3.7 14.7 2.4L13.5 3.6C14.5 4.6 15 5.9 15 7.1C15 8.4 14.5 9.7 13.5 10.6L14.7 11.8Z"
          fill="currentColor"
        />
        <path
          d="M12.5 7.1C12.5 5.72 11.38 4.6 10 4.6C8.62 4.6 7.5 5.72 7.5 7.1C7.5 7.86 7.84 8.52 8.37 8.98L5 19.1H7L7.67 17.1H12.34L13 19.1H15L11.63 8.98C12.16 8.52 12.5 7.86 12.5 7.1ZM8.33 15.1L10 10.1L11.67 15.1H8.33Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CellTower;
