import React from "react";
import { withIcon } from "../../hoc";

const IconSwitchRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5 15.38V8.62L18.88 12L15.5 15.38ZM14 19L21 12L14 5V19ZM10 19V5L3 12L10 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSwitchRight;
