import React from "react";
import { withIcon } from "../../hoc";

const IconInstallDesktop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 17H4V5H12V3H4C2.89 3 2 3.89 2 5V17C2 18.1 2.89 19 4 19H8V21H16V19H20C21.1 19 22 18.1 22 17V14H20V17Z"
        fill="currentColor"
      />
      <path
        d="M17 14L22 9L20.59 7.59L18 10.17V3H16V10.17L13.41 7.59L12 9L17 14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconInstallDesktop;
