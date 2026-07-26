import React from "react";
import { withIcon } from "../../hoc";

const IconTransitEnterexit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 24 H 0 V 4 H 6 V 13.54 L 19.96 0 L 24 4.06 L 10.3 18 H 20 V 24Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTransitEnterexit;
