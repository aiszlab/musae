import React from "react";
import { withIcon } from "../../hoc";

const AddRoad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2632)">
        <path d="M16 14V11H14V14H11V16H14V19H16V16H19V14H16Z" fill="currentColor" />
        <path d="M16 0H14V9H16V0Z" fill="currentColor" />
        <path d="M2 0H0V16H2V0Z" fill="currentColor" />
        <path d="M9 0H7V4H9V0Z" fill="currentColor" />
        <path d="M9 6H7V10H9V6Z" fill="currentColor" />
        <path d="M9 12H7V16H9V12Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AddRoad;
