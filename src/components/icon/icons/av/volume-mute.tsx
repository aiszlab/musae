import React from "react";
import { withIcon } from "../../hoc";

const IconVolumeMute = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.5 8.83V15.17L12.33 13H9.5V11H12.33L14.5 8.83ZM16.5 4L11.5 9H7.5V15H11.5L16.5 20V4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVolumeMute;
