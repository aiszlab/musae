import React from "react";
import { withIcon } from "../../hoc";

const IconPowerInput = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.5 9V11H21.5V9H2.5ZM2.5 15H7.5V13H2.5V15ZM9.5 15H14.5V13H9.5V15ZM16.5 15H21.5V13H16.5V15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPowerInput;
