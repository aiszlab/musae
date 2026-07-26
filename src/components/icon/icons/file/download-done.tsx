import React from "react";
import { withIcon } from "../../hoc";

const IconDownloadDone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 18H19V20H5V18ZM9.6 15.3L5 10.7L7 8.8L9.6 11.4L17 4L19 6L9.6 15.3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDownloadDone;
