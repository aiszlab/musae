import React from "react";
import { withIcon } from "../../hoc";

const IconFastForwardFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M0 12L8.5 6L0 0V12ZM9 0V12L17.5 6L9 0Z" fill="currentColor" />
    </svg>
  );
});

export default IconFastForwardFilled;
