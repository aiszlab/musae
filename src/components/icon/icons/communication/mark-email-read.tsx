import React from "react";
import { withIcon } from "../../hoc";

const IconMarkEmailRead = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 3H3.5C2.4 3 1.51 3.9 1.51 5L1.5 17C1.5 18.1 2.4 19 3.5 19H11.5V17H3.5V7L11.5 12L19.5 7V12H21.5V5C21.5 3.9 20.6 3 19.5 3ZM11.5 10L3.5 5H19.5L11.5 10ZM16.84 21L13.3 17.46L14.71 16.05L16.83 18.17L21.07 13.93L22.5 15.34L16.84 21Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMarkEmailRead;
