import React from "react";
import { withIcon } from "../../hoc";

const IconChecklistRtl = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 7.53484H2V9.53484H11V7.53484ZM11 15.5348H2V17.5348H11V15.5348ZM16.34 11.5348L12.8 7.99484L14.21 6.58484L16.33 8.70484L20.57 4.46484L22 5.87484L16.34 11.5348ZM16.34 19.5348L12.8 15.9948L14.21 14.5848L16.33 16.7048L20.57 12.4648L22 13.8748L16.34 19.5348Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconChecklistRtl;
