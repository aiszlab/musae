import React from "react";
import { withIcon } from "../../hoc";

const IconAddToDrive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 11C18.67 11 18.83 11.01 18.99 11.02L14.5 3H8.5L14.18 12.84C15.27 11.71 16.8 11 18.5 11Z"
        fill="currentColor"
      />
      <path d="M7.65 4.52L1.5 15.5L4.5 21L10.83 10.03L7.65 4.52Z" fill="currentColor" />
      <path
        d="M12.7 15.5H9.4L6.23 21H14.04C13.08 19.94 12.5 18.54 12.5 17C12.5 16.48 12.57 15.98 12.7 15.5Z"
        fill="currentColor"
      />
      <path d="M19.5 16V13H17.5V16H14.5V18H17.5V21H19.5V18H22.5V16H19.5Z" fill="currentColor" />
    </svg>
  );
});

export default IconAddToDrive;
