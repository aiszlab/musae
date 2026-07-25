import React from "react";
import { withIcon } from "../../hoc";

const Calculate = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path d="M8.25 4.72H3.25V6.22H8.25V4.72Z" fill="currentColor" />
        <path d="M15 12.75H10V14.25H15V12.75Z" fill="currentColor" />
        <path d="M15 10.25H10V11.75H15V10.25Z" fill="currentColor" />
        <path d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15Z" fill="currentColor" />
        <path
          d="M11.09 7.95L12.5 6.54L13.91 7.95L14.97 6.89L13.56 5.47L14.97 4.06L13.91 3L12.5 4.41L11.09 3L10.03 4.06L11.44 5.47L10.03 6.89L11.09 7.95Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Calculate;
