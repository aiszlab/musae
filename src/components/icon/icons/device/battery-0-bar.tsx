import React from "react";
import { withIcon } from "../../hoc";

const IconBattery0Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 5V21C17 21.55 16.55 22 16 22H8C7.45 22 7 21.55 7 21V5C7 4.45 7.45 4 8 4H10V2H14V4H16C16.55 4 17 4.45 17 5ZM15 6H9V20H15V6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBattery0Bar;
