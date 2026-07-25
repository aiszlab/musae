import React from "react";
import { withIcon } from "../../hoc";

const ReportOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1204)">
        <path
          d="M8.1 3.42H13.9L18 7.52V13.32L17.78 13.54L19.2 14.95L20 14.15V6.69L14.73 1.42H7.27L6.47 2.22L7.88 3.64L8.1 3.42Z"
          fill="currentColor"
        />
        <path
          d="M11 15.42C11.5523 15.42 12 14.9723 12 14.42C12 13.8677 11.5523 13.42 11 13.42C10.4477 13.42 10 13.8677 10 14.42C10 14.9723 10.4477 15.42 11 15.42Z"
          fill="currentColor"
        />
        <path
          d="M12 7.75V5.42H10V5.75L12 7.75ZM1.41 0L0 1.41L3.64 5.05L2 6.69V14.15L7.27 19.42H14.73L16.37 17.78L20.01 21.42L21.42 20.01L1.41 0ZM13.9 17.42H8.1L4 13.32V7.52L5.05 6.47L14.95 16.37L13.9 17.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ReportOff;
