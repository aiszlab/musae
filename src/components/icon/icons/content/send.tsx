import React from "react";
import { withIcon } from "../../hoc";

const IconSend = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSend;
