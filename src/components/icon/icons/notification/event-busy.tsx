import React from "react";
import { withIcon } from "../../hoc";

const IconEventBusy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM5 8V6H19V8H5ZM8.23 17.41L9.29 18.47L11.73 16.03L14.17 18.47L15.23 17.41L12.79 14.97L15.23 12.53L14.17 11.47L11.73 13.91L9.29 11.47L8.23 12.53L10.67 14.97L8.23 17.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEventBusy;
