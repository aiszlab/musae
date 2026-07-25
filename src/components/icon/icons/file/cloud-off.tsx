import React from "react";
import { withIcon } from "../../hoc";

const CloudOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.93) scale(1)">
        <path
          d="M24 11.14C24 8.5 21.95 6.36 19.35 6.18C18.67 2.73 15.64 0.14 12 0.14C10.67 0.14 9.43 0.5 8.35 1.11L9.84 2.6C10.51 2.31 11.23 2.14 12 2.14C15.04 2.14 17.5 4.6 17.5 7.64V8.14H19C20.66 8.14 22 9.48 22 11.14C22 12.13 21.52 12.99 20.79 13.54L22.2 14.95C23.29 14.03 24 12.68 24 11.14ZM4.41 0L3 1.41L5.77 4.18H5.35C2.34 4.5 0 7.05 0 10.14C0 13.45 2.69 16.14 6 16.14H17.73L19.73 18.14L21.14 16.73L4.41 0ZM6 14.14C3.79 14.14 2 12.35 2 10.14C2 7.93 3.79 6.14 6 6.14H7.73L15.73 14.14H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CloudOff;
