import React from "react";
import { withIcon } from "../../hoc";

const IconPerson2 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.39 14.56C16.71 13.7 14.53 13 12 13C9.47 13 7.29 13.7 5.61 14.56C4.61 15.07 4 16.1 4 17.22V20H20V17.22C20 16.1 19.39 15.07 18.39 14.56ZM18 18H6V17.22C6 16.84 6.2 16.5 6.52 16.34C7.71 15.73 9.63 15 12 15C14.37 15 16.29 15.73 17.48 16.34C17.8 16.5 18 16.84 18 17.22V18Z"
        fill="currentColor"
      />
      <path
        d="M9.78 12H14.22C15.43 12 16.36 10.94 16.2 9.74L15.88 7.29C15.57 5.39 13.92 4 12 4C10.08 4 8.43 5.39 8.12 7.29L7.8 9.74C7.64 10.94 8.57 12 9.78 12ZM10.1 7.59C10.26 6.67 11.06 6 12 6C12.94 6 13.74 6.67 13.9 7.59L14.22 10H9.78L10.1 7.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPerson2;
