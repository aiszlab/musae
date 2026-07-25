import React from "react";
import { withIcon } from "../../hoc";

const RemoveRoad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3243) scale(1.2973)">
        <path d="M16 0H14V9H16V0Z" fill="currentColor" />
        <path d="M2 0H0V16H2V0Z" fill="currentColor" />
        <path d="M9 0H7V4H9V0Z" fill="currentColor" />
        <path d="M9 6H7V10H9V6Z" fill="currentColor" />
        <path d="M9 12H7V16H9V12Z" fill="currentColor" />
        <path
          d="M18.5 12.41L17.09 11L15 13.09L12.91 11L11.5 12.41L13.59 14.5L11.5 16.59L12.91 18L15 15.91L17.09 18L18.5 16.59L16.41 14.5L18.5 12.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RemoveRoad;
