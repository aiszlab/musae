import React from "react";
import { withIcon } from "../../hoc";

const ChargingStation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.273 11.091 L 11.545 16.545 L 11.545 12.909 L 9.727 12.909 L 12.455 7.455 L 12.455 11.091 L 14.273 11.091 Z M 16.545 3.818 L 7.455 3.818 L 7.455 4.727 L 16.545 4.727 L 16.545 3.818 Z M 16.545 19.273 L 7.455 19.273 L 7.455 20.182 L 16.545 20.182 L 16.545 19.273 Z M 16.545 2 C 17.545 2 18.364 2.818 18.364 3.818 L 18.364 20.182 C 18.364 21.182 17.545 22 16.545 22 L 7.455 22 C 6.455 22 5.636 21.182 5.636 20.182 L 5.636 3.818 C 5.636 2.818 6.455 2 7.455 2 L 16.545 2 Z M 7.455 17.455 L 16.545 17.455 L 16.545 6.545 L 7.455 6.545 L 7.455 17.455 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ChargingStation;
