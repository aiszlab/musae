import React from "react";
import { withIcon } from "../../hoc";

const EmergencyRecording = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M16 6.48V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V9.52L20 13.5V2.5L16 6.48ZM14 14H2V2H14V14ZM10 8L13 9.73L12 11.46L9 9.73V13H7V9.73L4 11.46L3 9.73L6 8L3 6.27L4 4.54L7 6.27V3H9V6.27L12 4.54L13 6.27L10 8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EmergencyRecording;
