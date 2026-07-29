import React from "react";
import { withIcon } from "../../hoc";

const IconCrop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 15H19V7C19 5.9 18.1 5 17 5H9V7H17V15ZM7 17V1H5V5H1V7H5V17C5 18.1 5.9 19 7 19H17V23H19V19H23V17H7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCrop;
