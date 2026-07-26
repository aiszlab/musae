import React from "react";
import { withIcon } from "../../hoc";

const IconSolarPower = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 12H4L2 22H22L20 12ZM18.36 14L18.76 16H13V14H18.36ZM11 14V16H5.24L5.64 14H11ZM4.84 18H11V20H4.44L4.84 18ZM13 20V18H19.16L19.56 20H13Z"
        fill="currentColor"
      />
      <path d="M13 8H11V11H13V8Z" fill="currentColor" />
      <path
        d="M17.1787 5.79096L15.7645 7.20516L17.8858 9.32646L19.3 7.91226L17.1787 5.79096Z"
        fill="currentColor"
      />
      <path
        d="M6.82616 5.79149L4.70486 7.91279L6.11906 9.32699L8.24036 7.20569L6.82616 5.79149Z"
        fill="currentColor"
      />
      <path d="M6 2H3V4H6V2Z" fill="currentColor" />
      <path d="M21 2H18V4H21V2Z" fill="currentColor" />
      <path
        d="M12 7C14.76 7 17 4.76 17 2H15C15 3.65 13.65 5 12 5C10.35 5 9 3.65 9 2H7C7 4.76 9.24 7 12 7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSolarPower;
