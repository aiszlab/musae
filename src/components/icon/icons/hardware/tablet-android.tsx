import React from "react";
import { withIcon } from "../../hoc";

const TabletAndroid = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3, 0) scale(1)">
        <path
          d="M15 0H3C1.34 0 0 1.34 0 3V21C0 22.66 1.34 24 3 24H15C16.66 24 18 22.66 18 21V3C18 1.34 16.66 0 15 0ZM11 22H7V21H11V22ZM16.25 19H1.75V3H16.25V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TabletAndroid;
