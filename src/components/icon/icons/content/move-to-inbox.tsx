import React from "react";
import { withIcon } from "../../hoc";

const MoveToInbox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M13 6H10.45V3H7.55V6H5L9 10L13 6ZM16 0H1.99C0.88 0 0 0.9 0 2V16C0 17.1 0.88 18 1.99 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V13H5.56C6.25 14.19 7.53 15 9.01 15C10.49 15 11.76 14.19 12.46 13H16V16ZM16 11H11.01C11.01 12.1 10.11 13 9.01 13C7.91 13 7.01 12.1 7.01 11H2L1.99 2H16V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MoveToInbox;
