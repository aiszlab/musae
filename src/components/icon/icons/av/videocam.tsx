import React from "react";
import { withIcon } from "../../hoc";

const Videocam = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.3333)">
        <path
          d="M12 2V10H2V2H12ZM13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.45 13.55 0 13 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Videocam;
