import React from "react";
import { withIcon } from "../../hoc";

const IconBorderColor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.81 7.94L13.06 4.19L4 13.25V17H7.75L16.81 7.94ZM6 15V14.08L13.06 7.02L13.98 7.94L6.92 15H6Z"
        fill="currentColor"
      />
      <path
        d="M19.71 5.04C20.1 4.65 20.1 4.02 19.71 3.63L17.37 1.29C17.17 1.09 16.92 1 16.66 1C16.41 1 16.15 1.1 15.96 1.29L14.13 3.12L17.88 6.87L19.71 5.04Z"
        fill="currentColor"
      />
      <path d="M22 19H2V23H22V19Z" fill="currentColor" />
    </svg>
  );
});

export default IconBorderColor;
