import React from "react";
import { withIcon } from "../../hoc";

const IconDownload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 9.5H15V3.5H9V9.5H5L12 16.5L19 9.5ZM11 11.5V5.5H13V11.5H14.17L12 13.67L9.83 11.5H11ZM5 18.5H19V20.5H5V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDownload;
