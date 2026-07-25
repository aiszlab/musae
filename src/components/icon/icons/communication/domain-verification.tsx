import React from "react";
import { withIcon } from "../../hoc";

const DomainVerification = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3333) scale(1.3333)">
        <path
          d="M13.6 6.88L12.18 5.46L7.94 9.71L5.82 7.58L4.4 9L7.94 12.54L13.6 6.88Z"
          fill="currentColor"
        />
        <path
          d="M16 0H2C0.89 0 0 0.9 0 2V14C0 15.1 0.89 16 2 16H16C17.1 16 18 15.1 18 14V2C18 0.9 17.11 0 16 0ZM16 14H2V4H16V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DomainVerification;
