import React from "react";
import { withIcon } from "../../hoc";

const IconReceiptLong = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 3.5L17 2L15.5 3.5L14 2L12.5 3.5L11 2L9.5 3.5L8 2L6.5 3.5L5 2V16H2V19C2 20.66 3.34 22 5 22H17C18.66 22 20 20.66 20 19V2L18.5 3.5ZM14 20H5C4.45 20 4 19.55 4 19V18H14V20ZM18 19C18 19.55 17.55 20 17 20C16.45 20 16 19.55 16 19V16H7V5H18V19Z"
        fill="currentColor"
      />
      <path d="M14 7H8V9H14V7Z" fill="currentColor" />
      <path d="M17 7H15V9H17V7Z" fill="currentColor" />
      <path d="M14 10H8V12H14V10Z" fill="currentColor" />
      <path d="M17 10H15V12H17V10Z" fill="currentColor" />
    </svg>
  );
});

export default IconReceiptLong;
