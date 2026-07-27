import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSlightRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10.26 0 H 18.75 V 8.49 H 15.75 V 5.115 L 8.25 12.615 V 24 H 5.25 V 12.63 C 5.25 11.835 5.565 11.07 6.135 10.515 L 13.635 3.015 H 10.26 V 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSlightRight;
