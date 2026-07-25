import React from "react";
import { withIcon } from "../../hoc";

const AddLocationAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.6364, 0) scale(1.0909)">
        <path
          d="M16 0V3H19V5H16V8H14V5H11V3H14V0H16ZM8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12ZM9 2.06V4.08C8.66921 4.02773 8.33489 4.00098 8 4C4.65 4 2 6.57 2 10.2C2 12.54 3.95 15.64 8 19.34C12.05 15.64 14 12.55 14 10.2V10H16V10.2C16 13.52 13.33 17.45 8 22C2.67 17.45 0 13.52 0 10.2C0 5.22 3.8 2 8 2C8.34 2 8.67 2.02 9 2.06Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AddLocationAlt;
