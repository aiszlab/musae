import React from "react";
import { withIcon } from "../../hoc";

const RssFeed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5424)">
        <path
          d="M2.18 15.56C3.38398 15.56 4.36 14.584 4.36 13.38C4.36 12.176 3.38398 11.2 2.18 11.2C0.976019 11.2 0 12.176 0 13.38C0 14.584 0.976019 15.56 2.18 15.56Z"
          fill="currentColor"
        />
        <path
          d="M0 0V2.83C7.03 2.83 12.73 8.53 12.73 15.56H15.56C15.56 6.97 8.59 0 0 0ZM0 5.66V8.49C3.9 8.49 7.07 11.66 7.07 15.56H9.9C9.9 10.09 5.47 5.66 0 5.66Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RssFeed;
