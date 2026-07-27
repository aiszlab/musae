import React from "react";
import { withIcon } from "../../hoc";

const IconBrightnessLow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 8.69V4H15.31L12 0.69L8.69 4H4V8.69L0.69 12L4 15.31V20H8.69L12 23.31L15.31 20H20V15.31L23.31 12L20 8.69ZM18 14.48V18H14.48L12 20.48L9.52 18H6V14.48L3.52 12L6 9.52V6H9.52L12 3.52L14.48 6H18V9.52L20.48 12L18 14.48ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrightnessLow;
