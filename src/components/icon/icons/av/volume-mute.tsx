import React from "react";
import { withIcon } from "../../hoc";

const VolumeMute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5.25, 0) scale(1.5)">
        <path
          d="M7 4.83V11.17L4.83 9H2V7H4.83L7 4.83ZM9 0L4 5H0V11H4L9 16V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VolumeMute;
