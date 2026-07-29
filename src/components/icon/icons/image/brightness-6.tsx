import React from "react";
import { withIcon } from "../../hoc";

const IconBrightness6 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_2403_5079)">
        <path
          d="M20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804ZM12 6.50043V17.5004C15.03 17.5004 17.5 15.0304 17.5 12.0004C17.5 8.97043 15.03 6.50043 12 6.50043Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2403_5079">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default IconBrightness6;
