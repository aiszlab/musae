import React from "react";
import { withIcon } from "../../hoc";

const IconTurnSlightLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.74 0 H 5.25 V 8.49 H 8.25 V 5.115 L 15.75 12.615 V 24 H 18.75 V 12.63 C 18.75 11.835 18.435 11.07 17.865 10.515 L 10.365 3.015 H 13.74 V 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTurnSlightLeft;
