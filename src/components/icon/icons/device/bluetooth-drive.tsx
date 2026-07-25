import React from "react";
import { withIcon } from "../../hoc";

const BluetoothDrive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M4.5 15C5.32843 15 6 14.3284 6 13.5C6 12.6716 5.32843 12 4.5 12C3.67157 12 3 12.6716 3 13.5C3 14.3284 3.67157 15 4.5 15Z"
          fill="currentColor"
        />
        <path
          d="M13.5 15C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12C12.6716 12 12 12.6716 12 13.5C12 14.3284 12.6716 15 13.5 15Z"
          fill="currentColor"
        />
        <path
          d="M16 16H2V11H13V9H2.81L3.85 6H13V4H3.5C2.84 4 2.29 4.42 2.08 5.01L0 11V19C0 19.55 0.45 20 1 20H2C2.55 20 3 19.55 3 19V18H15V19C15 19.55 15.45 20 16 20H17C17.55 20 18 19.55 18 19V11H16V16Z"
          fill="currentColor"
        />
        <path
          d="M20 2.85L17.15 0H16.65V3.79L14.35 1.5L13.65 2.2L16.44 5L13.65 7.79L14.35 8.5L16.65 6.2V10H17.15L20 7.14L17.85 5L20 2.85ZM17.65 1.91L18.59 2.85L17.65 3.79V1.91ZM18.59 7.14L17.65 8.08V6.2L18.59 7.14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BluetoothDrive;
