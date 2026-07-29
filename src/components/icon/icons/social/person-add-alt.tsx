import React from "react";
import { withIcon } from "../../hoc";

const IconPersonAddAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 9V6H18V9H15V11H18V14H20V11H23V9H20ZM9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6ZM15.39 14.56C13.71 13.7 11.53 13 9 13C6.47 13 4.29 13.7 2.61 14.56C1.61 15.07 1 16.1 1 17.22V20H17V17.22C17 16.1 16.39 15.07 15.39 14.56ZM15 18H3V17.22C3 16.84 3.2 16.5 3.52 16.34C4.71 15.73 6.63 15 9 15C11.37 15 13.29 15.73 14.48 16.34C14.8 16.5 15 16.84 15 17.22V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPersonAddAlt;
