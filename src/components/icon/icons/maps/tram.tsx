import React from "react";
import { withIcon } from "../../hoc";

const Tram = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path
          d="M8 3L8.75 1.5H12V0H2V1.5H6.75L6 3C2.87 3.09 0 3.73 0 6.5V15C0 16.5 1.11 17.73 2.55 17.95L1 19.5V20H3L5 18H9L11 20H13V19.5L11.45 17.95C12.89 17.73 14 16.5 14 15V6.5C14 3.73 11.13 3.09 8 3ZM6.03 5H7.97C10.72 5.08 11.59 5.58 11.87 6H2.13C2.41 5.58 3.28 5.08 6.03 5ZM5.85 15.95H2.74C2.3 15.84 2 15.45 2 15V14H5.89C5.65 14.27 5.5 14.61 5.5 15C5.5 15.36 5.63 15.69 5.85 15.95ZM12 15C12 15.45 11.7 15.84 11.26 15.95H8.15C8.37 15.69 8.5 15.36 8.5 15C8.5 14.61 8.35 14.27 8.11 14H12V15ZM12 12H2V8H12V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Tram;
