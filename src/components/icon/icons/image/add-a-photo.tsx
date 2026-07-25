import React from "react";
import { withIcon } from "../../hoc";

const AddAPhoto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.0435) scale(1.0435)">
        <path
          d="M21 5H17.83L16 3H10V5H15.12L16.95 7H21V19H5V10H3V19C3 20.1 3.9 21 5 21H21C22.1 21 23 20.1 23 19V7C23 5.9 22.1 5 21 5ZM8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10ZM5 5H8V3H5V0H3V3H0V5H3V8H5V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AddAPhoto;
