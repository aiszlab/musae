import React from "react";
import { withIcon } from "../../hoc";

const LinkOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.11) scale(1.2)">
        <path
          d="M12.39 8.14L14 9.75V8.14H12.39ZM15 4.14H11V6.04H15C16.71 6.04 18.1 7.43 18.1 9.14C18.1 10.41 17.33 11.51 16.23 11.98L17.63 13.38C19.05 12.5 20 10.93 20 9.14C20 6.38 17.76 4.14 15 4.14ZM0 1.41L3.11 4.52C1.29 5.26 0 7.05 0 9.14C0 11.9 2.24 14.14 5 14.14H9V12.24H5C3.29 12.24 1.9 10.85 1.9 9.14C1.9 7.55 3.11 6.24 4.66 6.07L6.73 8.14H6V10.14H8.73L11 12.41V14.14H12.73L16.74 18.15L18.15 16.74L1.41 0L0 1.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LinkOff;
