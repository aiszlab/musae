import React from "react";
import { withIcon } from "../../hoc";

const TabletMac = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.5, 0) scale(1)">
        <path
          d="M16.5 0H2.5C1.12 0 0 1.12 0 2.5V21.5C0 22.88 1.12 24 2.5 24H16.5C17.88 24 19 22.88 19 21.5V2.5C19 1.12 17.88 0 16.5 0ZM9.5 23C8.67 23 8 22.33 8 21.5C8 20.67 8.67 20 9.5 20C10.33 20 11 20.67 11 21.5C11 22.33 10.33 23 9.5 23ZM17 19H2V3H17V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TabletMac;
