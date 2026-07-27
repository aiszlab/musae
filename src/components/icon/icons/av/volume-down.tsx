import React from "react";
import { withIcon } from "../../hoc";

const IconVolumeDown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.25 7.97V16.02C17.73 15.29 18.75 13.77 18.75 12C18.75 10.23 17.73 8.71 16.25 7.97ZM5.25 9V15H9.25L14.25 20V4L9.25 9H5.25ZM12.25 8.83V15.17L10.08 13H7.25V11H10.08L12.25 8.83Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVolumeDown;
