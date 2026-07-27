import React from "react";
import { withIcon } from "../../hoc";

const IconInstallMobile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18H5V6H12V4H5V3H12V1.01L5 1C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H15C16.1 23 17 22.1 17 21V16H15V18ZM15 21H5V20H15V21Z"
        fill="currentColor"
      />
      <path
        d="M16 14L21 9L19.59 7.59L17 10.17V3H15V10.17L12.41 7.59L11 9L16 14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconInstallMobile;
