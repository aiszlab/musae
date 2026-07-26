import React from "react";
import { withIcon } from "../../hoc";

const IconPunchClock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 6.5H18V1.5H6V6.5H5C3.9 6.5 3 7.4 3 8.5V20.5C3 21.6 3.9 22.5 5 22.5H19C20.1 22.5 21 21.6 21 20.5V8.5C21 7.4 20.1 6.5 19 6.5ZM8 3.5H16V6.5H8V3.5ZM19 20.5H5V8.5H19V20.5Z"
        fill="currentColor"
      />
      <path
        d="M12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5ZM12 18C10.07 18 8.5 16.43 8.5 14.5C8.5 12.57 10.07 11 12 11C13.93 11 15.5 12.57 15.5 14.5C15.5 16.43 13.93 18 12 18Z"
        fill="currentColor"
      />
      <path d="M12.5 12H11.5V14.71L13.14 16.35L13.85 15.64L12.5 14.29V12Z" fill="currentColor" />
    </svg>
  );
});

export default IconPunchClock;
