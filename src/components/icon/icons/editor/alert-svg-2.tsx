import React from "react";
import { withIcon } from "../../hoc";

const IconAlertSvg2 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="currentColor" />
      <path
        d="M15 8C14.3 8 13.63 8.1 13 8.29V4H1V16C1 17.1 1.9 18 3 18H8.68C9.8 20.36 12.21 22 15 22C18.87 22 22 18.87 22 15C22 11.13 18.87 8 15 8ZM8 15C8 15.34 8.03 15.67 8.08 16H3V6H11V9.26C9.19 10.53 8 12.62 8 15ZM15 20C12.24 20 10 17.76 10 15C10 12.24 12.24 10 15 10C17.76 10 20 12.24 20 15C20 17.76 17.76 20 15 20Z"
        fill="currentColor"
      />
      <path d="M15.5 11H14V16L17.6 18.1L18.4 16.9L15.5 15.2V11Z" fill="currentColor" />
    </svg>
  );
});

export default IconAlertSvg2;
