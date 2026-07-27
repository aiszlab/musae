import React from "react";
import { withIcon } from "../../hoc";

const IconFileDownloadDone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.13 5.41L18.72 4L9.52999 13.19L5.28 8.95L3.87 10.36L9.52999 16.02L20.13 5.41Z"
        fill="currentColor"
      />
      <path d="M19 18H5V20H19V18Z" fill="currentColor" />
    </svg>
  );
});

export default IconFileDownloadDone;
