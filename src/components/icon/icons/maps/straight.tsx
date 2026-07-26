import React from "react";
import { withIcon } from "../../hoc";

const IconStraight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10.6666 5.1065 L 8.5467 7.2132 L 6.6667 5.3332 L 12 0 L 17.3331 5.3332 L 15.4531 7.2132 L 13.3332 5.1065 V 23.9994 H 10.6666 V 5.1065Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStraight;
