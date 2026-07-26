import React from "react";
import { withIcon } from "../../hoc";

const IconRampLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.3332 23.9994 H 8.6666 V 5.1065 L 6.5467 7.2132 L 4.6667 5.3332 L 10 0 L 15.3331 5.3332 L 13.4531 7.2132 L 11.3332 5.1065 V 8 C 11.3332 13.693 16.7064 17.5062 19.333 19.0262 L 17.3864 20.9728 C 14.8398 19.4262 12.7998 17.5996 11.3332 15.6129 V 23.9994Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRampLeft;
