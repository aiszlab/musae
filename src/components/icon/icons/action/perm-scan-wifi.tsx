import React from "react";
import { withIcon } from "../../hoc";

const PermScanWifi = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.5C6.95 2.5 3.15 4.35 0 6.73L12 21.5L24 6.75C20.85 4.37 17.05 2.5 12 2.5ZM2.92 7.15C5.8 5.35 8.74 4.5 12 4.5C15.25 4.5 18.18 5.35 21.08 7.17L12 18.33L2.92 7.15ZM11 9.5H13V15.5H11V9.5ZM11 5.5H13V7.5H11V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PermScanWifi;
