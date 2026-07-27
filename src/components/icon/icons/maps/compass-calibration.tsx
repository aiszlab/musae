import React from "react";
import { withIcon } from "../../hoc";

const IconCompassCalibration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 11.5C9.24 11.5 7 13.74 7 16.5C7 19.26 9.24 21.5 12 21.5C14.76 21.5 17 19.26 17 16.5C17 13.74 14.76 11.5 12 11.5ZM12 19.5C10.35 19.5 9 18.15 9 16.5C9 14.85 10.35 13.5 12 13.5C13.65 13.5 15 14.85 15 16.5C15 18.15 13.65 19.5 12 19.5ZM12 2.5C8.1 2.5 4.56 4.09 2 6.65L7 11.65C8.28 10.37 10.05 9.57 12 9.57C13.95 9.57 15.72 10.36 17 11.64L22 6.64C19.44 4.09 15.9 2.5 12 2.5ZM16.84 8.97C15.4 8.06 13.74 7.57 12 7.57C10.26 7.57 8.59 8.06 7.15 8.98L4.94 6.76C6.99 5.29 9.44 4.5 12 4.5C14.56 4.5 17 5.29 19.05 6.76L16.84 8.97Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCompassCalibration;
