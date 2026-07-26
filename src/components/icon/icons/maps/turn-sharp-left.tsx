import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSharpLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 6 5.1065 L 3.88 7.2132 L 2 5.3332 L 7.3332 0 L 12.6664 5.3332 L 10.7864 7.2132 L 8.6665 5.1065 V 13.333 H 19.3329 C 20.7995 13.333 21.9995 14.533 21.9995 16 V 23.9994 H 19.3329 V 16 H 8.6665 C 7.1999 16 6 14.7996 6 13.333 V 5.1065Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSharpLeft;
