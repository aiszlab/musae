import React from "react";
import { withIcon } from "../../hoc";

const IconCoPresent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 2.5H3C1.9 2.5 1 3.4 1 4.5V12.5H3V4.5H21V20.5C22.1 20.5 23 19.6 23 18.5V4.5C23 3.4 22.1 2.5 21 2.5Z"
        fill="currentColor"
      />
      <path
        d="M13 9.5C13 7.29 11.21 5.5 9 5.5C6.79 5.5 5 7.29 5 9.5C5 11.71 6.79 13.5 9 13.5C11.21 13.5 13 11.71 13 9.5ZM7 9.5C7 8.4 7.9 7.5 9 7.5C10.1 7.5 11 8.4 11 9.5C11 10.6 10.1 11.5 9 11.5C7.9 11.5 7 10.6 7 9.5Z"
        fill="currentColor"
      />
      <path
        d="M15.39 16.06C13.71 15.2 11.53 14.5 9 14.5C6.47 14.5 4.29 15.2 2.61 16.06C1.61 16.57 1 17.6 1 18.72V21.5H17V18.72C17 17.6 16.39 16.57 15.39 16.06ZM15 19.5H3C3 18.78 2.9 18.16 3.52 17.84C4.71 17.23 6.63 16.5 9 16.5C11.37 16.5 13.29 17.23 14.48 17.84C15.11 18.16 15 18.79 15 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCoPresent;
