import React from "react";
import { withIcon } from "../../hoc";

const HeadsetOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0619, 0) scale(1.1262)">
        <path
          d="M11.31 2C15.18 2 18.31 5.13 18.31 9V10H14.31V10.17L16.14 12H18.31V14.17L20.31 16.17V9C20.31 4.03 16.28 0 11.31 0C9.29 0 7.43 0.67 5.93 1.8L7.36 3.23C8.48 2.45 9.84 2 11.31 2Z"
          fill="currentColor"
        />
        <path
          d="M1.41 0.0999999L0 1.51L3.33 4.84C2.68 6.09 2.31 7.5 2.31 9V16C2.31 17.1 3.21 18 4.31 18H8.31V10H4.31V9C4.31 8.06 4.5 7.17 4.83 6.35L14.31 15.83V18H16.48L17.48 19H11.31V21H18.31C18.65 21 18.96 20.91 19.24 20.76L19.79 21.31L21.2 19.9L1.41 0.0999999ZM6.31 12V16H4.31V12H6.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HeadsetOff;
