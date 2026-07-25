import React from "react";
import { withIcon } from "../../hoc";

const WaterDamage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 3.5 L 2 12.5 L 5 12.5 L 5 20.5 L 19 20.5 L 19 12.5 L 22 12.5 L 12 3.5 Z M 7 18.5 L 7 10.69 L 12 6.19 L 17 10.69 L 17 18.5 L 7 18.5 Z M 14 14.5 C 14 15.6 13.1 16.5 12 16.5 C 10.9 16.5 10 15.6 10 14.5 C 10 13.4 12 10.5 12 10.5 C 12 10.5 14 13.4 14 14.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default WaterDamage;
