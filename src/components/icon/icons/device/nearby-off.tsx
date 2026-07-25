import React from "react";
import { withIcon } from "../../hoc";

const NearbyOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0102) scale(1.1643)">
        <path
          d="M20.02 11.415L17.44 13.995L15.63 12.185L17.81 9.995L10.61 2.795L8.42 4.985L6.61 3.165L9.19 0.585C9.97 -0.195 11.24 -0.195 12.02 0.585L20.02 8.585C20.81 9.365 20.81 10.625 20.02 11.415ZM19.8 19.185L18.39 20.595L14.61 16.825L12.03 19.405C11.25 20.185 9.98 20.185 9.2 19.405L1.2 11.405C0.42 10.625 0.42 9.355 1.2 8.575L3.78 5.995L0 2.215L1.41 0.805L19.8 19.185ZM12.8 15.015L11.41 13.625L10.61 14.425L6.19 9.995L6.99 9.195L5.59 7.805L3.41 9.995L10.61 17.195L12.8 15.015ZM15.03 9.995L10.61 5.575L9.81 6.375L14.23 10.795L15.03 9.995Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NearbyOff;
