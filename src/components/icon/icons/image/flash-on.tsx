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
      <path d="M2 2V13H5V22L12 10H8L11 2H2Z" fill="currentColor" />
    </svg>
  );
});

export default IconFlashOn;
