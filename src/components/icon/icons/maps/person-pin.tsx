import React from "react";
import { withIcon } from "../../hoc";

const IconPersonPin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 1.5H5C3.89 1.5 3 2.4 3 3.5V17.5C3 18.6 3.89 19.5 5 19.5H9L12 22.5L15 19.5H19C20.1 19.5 21 18.6 21 17.5V3.5C21 2.4 20.1 1.5 19 1.5ZM19 17.5H14.17L12 19.67L9.83 17.5H5V3.5H19V17.5ZM12 10.5C13.65 10.5 15 9.15 15 7.5C15 5.85 13.65 4.5 12 4.5C10.35 4.5 9 5.85 9 7.5C9 9.15 10.35 10.5 12 10.5ZM12 6.5C12.55 6.5 13 6.95 13 7.5C13 8.05 12.55 8.5 12 8.5C11.45 8.5 11 8.05 11 7.5C11 6.95 11.45 6.5 12 6.5ZM18 15.08C18 12.58 14.03 11.5 12 11.5C9.97 11.5 6 12.58 6 15.08V16.5H18V15.08ZM8.48 14.5C9.22 13.99 10.71 13.5 12 13.5C13.29 13.5 14.78 13.99 15.52 14.5H8.48Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPersonPin;
