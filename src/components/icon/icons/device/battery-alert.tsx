import React from "react";
import { withIcon } from "../../hoc";

const IconBatteryAlert = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 18H11V16H13V18ZM13 14H11V9H13V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBatteryAlert;
