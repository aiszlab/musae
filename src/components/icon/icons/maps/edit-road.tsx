import React from "react";
import { withIcon } from "../../hoc";

const EditRoad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8961) scale(1.263)">
        <path d="M14 0H12V7.9L14 5.9V0Z" fill="currentColor" />
        <path d="M2 0H0V16H2V0Z" fill="currentColor" />
        <path d="M8 0H6V4H8V0Z" fill="currentColor" />
        <path d="M8 6H6V10H8V6Z" fill="currentColor" />
        <path d="M8 12H6V16H8V12Z" fill="currentColor" />
        <path
          d="M18.56 8.59L17.41 7.44C16.82 6.85 15.87 6.85 15.29 7.44L10 12.73V16H13.27L18.56 10.71C19.15 10.12 19.15 9.17 18.56 8.59ZM12.58 14.45H11.55V13.42L15 9.97L16.03 11L12.58 14.45Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EditRoad;
