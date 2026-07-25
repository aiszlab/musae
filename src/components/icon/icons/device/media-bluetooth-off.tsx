import React from "react";
import { withIcon } from "../../hoc";

const MediaBluetoothOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.4774) scale(1.1645)">
        <path
          d="M7.61 3.36V0.19H13.61V4.19H9.61V5.36L7.61 3.36ZM18.03 12.19L20.61 14.76L19.81 15.56L13.03 8.78L13.83 7.98L16.58 10.73V6.19H17.18L20.61 9.62L18.03 12.19ZM17.78 10.74L18.91 9.61L17.78 8.48V10.74ZM19.8 18.38L18.39 19.79L14.41 15.81L13.83 16.39L12.98 15.54L13.56 14.96L9.61 11.02V14.19C9.61 16.4 7.83 18.19 5.62 18.19C3.41 18.19 1.61 16.4 1.61 14.19C1.61 11.98 3.4 10.19 5.62 10.19C6.35 10.19 7.03 10.4 7.62 10.74V9.02L0 1.41L1.41 0L19.8 18.38Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MediaBluetoothOff;
