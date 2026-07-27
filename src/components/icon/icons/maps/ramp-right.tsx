import React from "react";
import { withIcon } from "../../hoc";

const IconRampRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12.6665 23.9994 H 15.3331 V 5.1065 L 17.453 7.2265 L 19.333 5.3332 L 14 0 L 8.6666 5.3332 L 10.5466 7.2132 L 12.6665 5.1065 V 8 C 12.6665 13.693 7.2933 17.5062 4.6667 19.0262 L 6.6133 20.9728 C 9.1599 19.4128 11.1999 17.5862 12.6665 15.5996 V 23.9994Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRampRight;
