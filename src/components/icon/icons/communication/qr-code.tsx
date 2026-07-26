import React from "react";
import { withIcon } from "../../hoc";

const IconQrCode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" fill="currentColor" />
      <path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" fill="currentColor" />
      <path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" fill="currentColor" />
      <path d="M21 19H19V21H21V19Z" fill="currentColor" />
      <path d="M15 13H13V15H15V13Z" fill="currentColor" />
      <path d="M17 15H15V17H17V15Z" fill="currentColor" />
      <path d="M15 17H13V19H15V17Z" fill="currentColor" />
      <path d="M17 19H15V21H17V19Z" fill="currentColor" />
      <path d="M19 17H17V19H19V17Z" fill="currentColor" />
      <path d="M19 13H17V15H19V13Z" fill="currentColor" />
      <path d="M21 15H19V17H21V15Z" fill="currentColor" />
    </svg>
  );
});

export default IconQrCode;
