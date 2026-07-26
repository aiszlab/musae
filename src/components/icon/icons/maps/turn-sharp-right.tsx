import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSharpRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 5.1065 L 20.1195 7.2265 L 21.9995 5.3332 L 16.6663 0 L 11.3331 5.3332 L 13.2131 7.2132 L 15.333 5.1065 V 13.333 H 4.6666 C 3.2 13.333 2 14.533 2 16 V 23.9994 H 4.6666 V 16 H 15.333 C 16.7996 16 18 14.7996 18 13.333 V 5.1065Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSharpRight;
