import React from "react";
import { withIcon } from "../../hoc";

const IconFlashOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M7 2V13H10V22L17 10H13L16 2H7Z" fill="currentColor" />
    </svg>
  );
});

export default IconFlashOn;
