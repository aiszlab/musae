import React from "react";
import { withIcon } from "../../hoc";

const IconTurnRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.4344 8.5715 L 14.7087 11.2972 L 17.143 13.7144 L 24 6.8572 L 17.143 0 L 14.7258 2.4172 L 17.4344 5.1429 H 3.4286 C 1.5429 5.1429 0 6.6858 0 8.5715 V 24 H 3.4286 V 8.5715 H 17.4344Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnRight;
