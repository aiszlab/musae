import React from "react";
import { withIcon } from "../../hoc";

const IconViewInAr = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 4C3 3.45 3.45 3 4 3H6V1H4C2.34 1 1 2.34 1 4V6H3V4Z" fill="currentColor" />
      <path
        d="M3 20V18H1V20C1 21.66 2.34 23 4 23H6V21H4C3.45 21 3 20.55 3 20Z"
        fill="currentColor"
      />
      <path
        d="M20 1H18V3H20C20.55 3 21 3.45 21 4V6H23V4C23 2.34 21.66 1 20 1Z"
        fill="currentColor"
      />
      <path
        d="M21 20C21 20.55 20.55 21 20 21H18V23H20C21.66 23 23 21.66 23 20V18H21V20Z"
        fill="currentColor"
      />
      <path
        d="M19 14.87V9.13C19 8.41 18.62 7.75 18 7.4L13 4.52C12.69 4.34 12.35 4.25 12 4.25C11.65 4.25 11.31 4.34 11 4.52L6 7.39C5.38 7.75 5 8.41 5 9.13V14.87C5 15.59 5.38 16.25 6 16.6L11 19.48C11.31 19.66 11.65 19.75 12 19.75C12.35 19.75 12.69 19.66 13 19.48L18 16.6C18.62 16.25 19 15.59 19 14.87ZM11 17.17L7 14.87V10.24L11 12.57V17.17ZM12 10.84L8.04 8.53L12 6.25L15.96 8.53L12 10.84ZM17 14.87L13 17.17V12.57L17 10.24V14.87Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewInAr;
