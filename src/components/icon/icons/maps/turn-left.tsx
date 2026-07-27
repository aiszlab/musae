import React from "react";
import { withIcon } from "../../hoc";

const IconTurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 6.5658 8.5715 L 9.2915 11.2972 L 6.8572 13.7144 L 0 6.8572 L 6.8572 0 L 9.2744 2.4172 L 6.5658 5.1429 H 20.5716 C 22.4573 5.1429 24 6.6858 24 8.5715 V 24 H 20.5716 V 8.5715 H 6.5658Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnLeft;
