import React from "react";
import { withIcon } from "../../hoc";

const IconCameraIndoor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 13V12C14 11.45 13.55 11 13 11H9C8.45 11 8 11.45 8 12V16C8 16.55 8.45 17 9 17H13C13.55 17 14 16.55 14 16V15L16 16.06V11.94L14 13ZM12 5.5L18 10V19H6V10L12 5.5ZM12 3L4 9V21H20V9L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCameraIndoor;
