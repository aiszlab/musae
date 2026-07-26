import React from "react";
import { withIcon } from "../../hoc";

const IconSignalWifi4Bar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.01 21.24L23.64 6.75C23.19 6.41 18.71 2.75 12 2.75C5.28 2.75 0.81 6.41 0.36 6.75L11.99 21.24L12 21.25L12.01 21.24Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalWifi4Bar;
