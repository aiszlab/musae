import React from "react";
import { withIcon } from "../../hoc";

const IconLocalAirport = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 24 16.8 V 14.4 L 13.8 8.4 V 1.8 C 13.8 0.804 12.996 0 12 0 C 11.004 0 10.2 0.804 10.2 1.8 V 8.4 L 0 14.4 V 16.8 L 10.2 13.8 V 20.4 L 7.2 22.2 V 24 L 12 22.8 L 16.8 24 V 22.2 L 13.8 20.4 V 13.8 L 24 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalAirport;
