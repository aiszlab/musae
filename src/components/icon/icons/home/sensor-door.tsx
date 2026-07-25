import React from "react";
import { withIcon } from "../../hoc";

const SensorDoor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M14 2V18H2V2H14ZM14 0H2C0.9 0 0 0.9 0 2V20H16V2C16 0.9 15.1 0 14 0ZM11.5 8.5C10.67 8.5 10 9.17 10 10C10 10.83 10.67 11.5 11.5 11.5C12.33 11.5 13 10.83 13 10C13 9.17 12.33 8.5 11.5 8.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SensorDoor;
