import React from "react";
import { withIcon } from "../../hoc";

const SpatialAudio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.5 14C11.71 14 13.5 12.21 13.5 10C13.5 7.79 11.71 6 9.5 6C7.29 6 5.5 7.79 5.5 10C5.5 12.21 7.29 14 9.5 14ZM9.5 8C10.6 8 11.5 8.9 11.5 10C11.5 11.1 10.6 12 9.5 12C8.4 12 7.5 11.1 7.5 10C7.5 8.9 8.4 8 9.5 8Z"
        fill="currentColor"
      />
      <path
        d="M15.89 16.56C14.21 15.7 12.03 15 9.5 15C6.97 15 4.79 15.7 3.11 16.56C2.11 17.07 1.5 18.1 1.5 19.22V22H17.5V19.22C17.5 18.1 16.89 17.07 15.89 16.56ZM15.5 20H3.5V19.22C3.5 18.84 3.7 18.5 4.02 18.34C5.21 17.73 7.13 17 9.5 17C11.87 17 13.79 17.73 14.98 18.34C15.3 18.5 15.5 18.84 15.5 19.22V20Z"
        fill="currentColor"
      />
      <path
        d="M15.5 2H13.5C13.5 6.97 17.53 11 22.5 11V9C18.64 9 15.5 5.86 15.5 2Z"
        fill="currentColor"
      />
      <path
        d="M19.5 2H17.5C17.5 4.76 19.74 7 22.5 7V5C20.85 5 19.5 3.65 19.5 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SpatialAudio;
